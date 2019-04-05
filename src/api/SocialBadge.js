import React, { Component } from 'react';

export default function SocialBadge(props) {
        console.log(props)

        return (
            <svg
            className='Footer-social'
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <a href={props.link} target='blank'>
            <path d={props.path}/>
            </a>
            </svg>
        )
    }