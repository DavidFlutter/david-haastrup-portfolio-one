import React from 'react'
import {AiFillLinkedin, AiTwotoneMail} from "react-icons/ai";
import {BiSolidPhoneCall} from "react-icons/bi";

const ContactSection = () => {
  return (
    <div className='ContactSection' id='ContactSection'>
        <h2>Get in touch</h2>
        <div className="contact-wrapper">
            <div className="buttons">
                <div className="con">
                    <a href="https://www.linkedin.com/in/david-haastrup-678609209/"
                        target='_blank' rel="noreferrer"
                    >
                        <AiFillLinkedin></AiFillLinkedin>
                    </a>
                    <span>
                        https://www.linkedin.com/in/david-haastrup-678609209/
                    </span>
                </div>
                <div className="con">
                    <a href="">
                        <AiTwotoneMail></AiTwotoneMail>
                    </a>
                    <span>
                        david.haastrup@stu.cu.edu.ng
                    </span>
                </div>
                <div className="con">
                    <a href="">
                        <BiSolidPhoneCall></BiSolidPhoneCall>
                    </a>
                    <span>
                        +2349067458357 
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection