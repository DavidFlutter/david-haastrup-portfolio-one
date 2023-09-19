import React from 'react'

const HeroSection = () => {
  return (
    <div className='HeroSection'>
        <div className="hero-text">
            <h2>
                Hi there I'm David, a Fullstack <span>JS</span> developer based in Nigeria
            </h2>
            <p>
                Hello, I'm David Haastrup, a Fullstack Web Developer with a passion for crafting digital solutions using JavaScript. While I may be at the beginning of my professional journey, my enthusiasm for web development knows no bounds.
            </p>
            <div className="buttons">
                <a href="" 
                    target='_blank' rel="noreferrer"
                >
                    View Linkedin
                </a>
                <a href="https://github.com/DavidFlutter" 
                    target='_blank' rel="noreferrer"
                    className='alt'
                >
                    View Github
                </a>
            </div>
        </div>
        <div className="hero-image">
            <img src={require("../images/hero_image.jpg")} alt="" />
        </div>
    </div>
  )
}

export default HeroSection