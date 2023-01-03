import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCss3, SiHtml5, SiJava, SiJavascript, SiMongodb, SiMysql, SiPython, SiReact, SiTypescript } from 'react-icons/si';

const socialLinks = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/siddhesh-agarwal"
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        link: "https://www.twitter.com/siddhesh0205"
    },
    {
        name: "Email",
        icon: <FaEnvelope />,
        link: "mailto:siddhesh.agarwal@gmail.com",
    },
]

function SocialLinks() {
    return (
        <div className="row">
            <div className="col-12">
                {
                    socialLinks.map((link) => {
                        return (
                            <a
                                href={link.link}
                                rel="noreferrer noopener" target="_blank"
                                className="btn btn-primary mx-2"
                            >
                                {link.icon}
                                <p className="d-inline mx-2">
                                    {link.name}
                                </p>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

function Tools() {
    return (
        <span className="text-primary">
            <SiPython /> <SiCss3 /> <SiHtml5 /> <SiJavascript /> <SiTypescript /> <SiReact /> <SiMongodb /> <SiMysql /> <SiC /> <SiCplusplus /> <SiJava />
        </span>
    )
}

function Intro() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Hello, I'm <span className="text-primary text-decoration-underline">Siddhesh</span></h1>
                    <h2 className="display-3 text-center">I'm a <span className="text-primary text-decoration-underline">Full Stack Developer</span></h2>
                </div>
            </div>
            {/* List things proficient in  */}
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h3 className="display-6">I'm proficient in: <Tools />
                    </h3>
                </div>
            </div>
            {/* Ways to contact me */}
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h3 className="display-6 mb-3">You can contact me on</h3>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}

export default Intro;
