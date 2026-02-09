import React from 'react'
import App from '../app/app'
import Navbar from '../navbar/navbar'
import Blog from '../blog/blog'

export const normalizePathname = (pathname = '/') => {
  const normalized = pathname.replace(/\/+$/, '')
  return normalized || '/'
}

export const getBlogSlugFromPath = (pathname) => {
  const normalizedPath = normalizePathname(pathname)

  if (normalizedPath === '/blog') {
    return ''
  }

  if (normalizedPath.startsWith('/blog/')) {
    return decodeURIComponent(normalizedPath.slice('/blog/'.length))
  }

  return null
}

export default function Root({ pathname = window.location.pathname }) {
  const blogSlug = getBlogSlugFromPath(pathname)

  if (blogSlug === null) {
    return <App />
  }

  return (
    <>
      <Navbar isBlogPage />
      <Blog slug={blogSlug || undefined} />
    </>
  )
}
