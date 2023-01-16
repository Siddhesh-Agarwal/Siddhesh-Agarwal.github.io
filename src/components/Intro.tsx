import React from 'react';
import {
    FaEnvelope,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';
import {
    SiC,
    SiCplusplus,
    SiCss3,
    SiHtml5,
    // SiJava,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiPython,
    SiReact,
    SiTypescript
} from 'react-icons/si';
import Typewriter from 'typewriter-effect';

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
                                className="btn btn-primary mx-2 my-1"
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
    const links = [
        {
            name: "Python",
            icon: <SiPython />,
        },
        {
            name: "CSS",
            icon: <SiCss3 />,
        },
        {
            name: "HTML",
            icon: <SiHtml5 />,
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />,
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
        },
        {
            name: "React",
            icon: <SiReact />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
        },
        {
            name: "MySQL",
            icon: <SiMysql />,
        },
        {
            name: "C",
            icon: <SiC />,
        },
        {
            name: "C++",
            icon: <SiCplusplus />,
        },
        // {
        //     name: "Java",
        //     icon: <SiJava />,
        // },
    ]
    return (
        <span className="text-primary">
            {
                links.map((link) => (
                    <span className="mx-2 my-1" title={link.name}>
                        {link.icon}
                    </span>
                ))
            }
        </span>
    )
}

function Roles() {
    const delay = 1000;
    return (
        <Typewriter
            onInit={
                (typewriter) => {
                    typewriter.typeString("I'm a ")
                        .pauseFor(delay / 2)
                        .typeString("<span class='text-primary'>Web Developer</span>")
                        .pauseFor(delay)
                        .deleteChars(13)
                        .pauseFor(delay / 4)
                        .typeString("<span class='text-primary'>Full Stack Developer</span>")
                        .pauseFor(delay)
                        .deleteChars(20)
                        .pauseFor(delay / 4)
                        .typeString("<span class='text-primary'>ML Engineer</span>")
                        .pauseFor(delay)
                        .deleteChars(11)
                        .pauseFor(delay / 4)
                        .typeString("<span class='text-primary'>Data Scientist</span>")
                        .pauseFor(delay)
                        .deleteChars(15)
                        .pauseFor(delay / 4)
                        .typeString("<span class='text-primary'>DevOPs Engineer</span>")
                        .pauseFor(delay)
                        .deleteChars(16)
                        .pauseFor(delay / 4)
                        .typeString("<span class='text-primary'>Cloud Architect</span>")
                        .pauseFor(delay)
                        .deleteChars(16)
                        .start();
                }
            }
            options={{
                autoStart: true,
                loop: true,
                delay: 50,
                
                deleteSpeed: 20,
            }}
        />
    )
}

function Intro() {
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Hello, I'm <span className="text-primary fw-bolder">Siddhesh</span></h1>
                    <h2 className="display-3 text-center"><Roles /></h2>
                </div>
            </div>
            {/* List things proficient in  */}
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h3 className="display-6">
                        <p className="mb-3">
                            I'm proficient in:
                        </p>
                        <Tools />
                    </h3>
                </div>
            </div>
            {/* Ways to contact me */}
            <div className="row mt-3 mt-lg-5">
                <div className="col-12 text-center">
                    <h3 className="display-6 mb-3">You can contact me on:</h3>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}

export default Intro;
