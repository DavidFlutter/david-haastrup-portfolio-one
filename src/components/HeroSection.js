import React from 'react'

const HeroSection = () => {
  return (
    <div className='HeroSection' id='HeroSection'>
        <div className="hero-text">
            <h2>
                Hi there I'm David, an up and coming <span>C#</span> Back-End developer
            </h2>
            <p>
                Hello, I'm David Haastrup, an up and coming C# Back-End Developer with a passion for crafting solutions using C#. While I may be at the beginning of my software development journey, my enthusiasm for software development knows no bounds <br />I am also skill at <b>frontend</b> development using the <b>React</b>
            </p>
            <div className="buttons">
                <a href="https://www.linkedin.com/in/david-haastrup-678609209/" 
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