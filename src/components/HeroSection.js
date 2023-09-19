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

            {/* <h2>About me</h2>
            <div className="blocks">
                <div className="block">
                    <h3>Passion for Learning</h3>
                    <p>
                        One thing that defines me is my unwavering passion for learning. In this ever-evolving field, I thrive on staying up-to-date with the latest technologies, frameworks, and best practices. 
                    </p>
                </div>
                <div className="block">
                    <h3>Creating and Problem-Solving</h3>
                    <p>
                        I find immense joy in creating new things and solving intricate problems. 
                    </p>
                </div>
            </div> */}
        </div>
        <div className="hero-image">
            <img src={require("../images/hero_image.jpg")} alt="" />
        </div>
    </div>
  )
}

export default HeroSection