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

function Intro() {
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Hello, I'm <span className="text-primary fw-bolder">Siddhesh</span></h1>
                    <h2 className="display-3 text-center">I'm a <span className="text-primary">Full Stack Developer</span></h2>
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
