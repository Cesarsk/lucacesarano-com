import matter from 'front-matter'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import plaintext from 'highlight.js/lib/languages/plaintext'
import { markedHighlight } from 'marked-highlight'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('shell', bash)
hljs.registerLanguage('sh', bash)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('js', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('text', plaintext)

const languageAliases = {
  shell: 'bash',
  sh: 'bash',
  js: 'javascript',
  text: 'plaintext',
}

marked.use(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, language) {
      const normalizedLanguage = languageAliases[language] || language || 'plaintext'

      if (hljs.getLanguage(normalizedLanguage)) {
        return hljs.highlight(code, { language: normalizedLanguage, ignoreIllegals: true }).value
      }

      return hljs.highlight(code, { language: 'plaintext', ignoreIllegals: true }).value
    },
  })
)

const markdownModules = import.meta.glob('./*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

const getSlugFromPath = (path) => path.split('/').pop().replace(/\.md$/, '')

const parseDate = (value) => {
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed
}

const normalizeTags = (tags) => (Array.isArray(tags) ? tags.filter(Boolean) : [])

const allPosts = Object.entries(markdownModules)
  .map(([path, rawMarkdown]) => {
    const { attributes, body } = matter(rawMarkdown)
    const slug = attributes.slug || getSlugFromPath(path)

    return {
      slug,
      title: attributes.title || slug,
      date: attributes.date || '',
      summary: attributes.summary || '',
      tags: normalizeTags(attributes.tags),
      html: marked.parse(body.trim()),
    }
  })
  .sort((firstPost, secondPost) => parseDate(secondPost.date) - parseDate(firstPost.date))

export const getAllPosts = () => allPosts

export const getPostBySlug = (slug) => allPosts.find((post) => post.slug === slug)
