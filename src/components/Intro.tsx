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
    SiJava,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiPython,
    SiReact,
    SiTypescript
} from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';


function SocialLinks() {
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
    return (
        <div className="row">
            <div className="col-12">
                {
                    socialLinks.map((link) => {
                        return (
                            <motion.a
                                href={link.link}
                                rel="noreferrer noopener" target="_blank"
                                className="btn btn-primary mx-2 my-1"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {link.icon}
                                <p className="d-inline mx-2">
                                    {link.name}
                                </p>
                            </motion.a>
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
        {
            name: "Java",
            icon: <SiJava />,
        },
    ]
    return (
        <div className="row d-flex justify-content-center" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            {
                links.map(
                    (link) => {
                        return (
                            <motion.div
                                className="m-1 text-primary fw-bolder d-inline-block"
                                style={{ display: "inline-block", width: "fit-content" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {link.icon}
                            </motion.div>
                        )
                    }
                )
            }
        </div>
    )
}


function Roles() {
    const delay = 1000;
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: delay / 1000 }}
            transition={{ delay: delay / 1000 }}

        >
            <Typewriter
                onInit={
                    (typewriter) => {
                        typewriter
                            .pauseFor(delay)
                            .typeString("I'm a <span class='text-primary'>Web Developer</span>")
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
        </motion.span>
    )
}


export default function Intro() {
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
