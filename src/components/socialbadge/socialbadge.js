import React from 'react'
import './socialbadge.css'

export default function SocialBadge(props) {
    return (
        <div className="SocialBadge" onClick={() => {
            openInNewTab("" + props.link)
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d={props.path}/>
            </svg>
        </div>
    )

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
}

