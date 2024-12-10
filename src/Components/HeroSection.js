import './HeroSection.css'
import Button from './Button'

import React from 'react'

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Welcome To My Website</h1>
            <p>Makes Your Dreams Here</p>

            <div className='hero-btns'>
                <Button className="btn" buttonStyles='btn-outline' buttonSize='btn-large'>Get Started</Button>
                <Button className="btn" buttonStyles='btn-primary' buttonSize='btn-large'>Watch Here <i className='far fa-play-circle' /></Button>

            </div>

        </div>
    )
}
