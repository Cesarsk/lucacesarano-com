import React from 'react'
import './socialbadge.css'

export default function SocialBadge(props) {
    const { link, path, label } = props

    return (
        <a
            className="SocialBadge"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label || 'Social link'}>
            <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d={path} />
            </svg>
        </a>
    )
}

