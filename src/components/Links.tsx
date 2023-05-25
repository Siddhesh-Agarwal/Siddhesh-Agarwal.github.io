import React from 'react';
import {
    FaLinkedinIn,
    FaGithub,
    FaKaggle,
    FaDev,
    FaTwitter,
    FaHackerrank,
    FaCloudDownloadAlt
} from 'react-icons/fa';
import {
    SiHashnode,
    SiLeetcode,
    SiStackoverflow,
    SiHackerearth,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const socialLinks = [
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/siddhesh-agarwal"
    },
    {
        name: "Github",
        icon: <FaGithub />,
        link: "https://www.github.com/siddhesh-agarwal"
    },
    {
        name: "Kaggle",
        icon: <FaKaggle />,
        link: "https://www.kaggle.com/siddheshagarwal"
    },
    {
        name: "Dev.to",
        icon: <FaDev />,
        link: "https://www.dev.to/siddhesh_agarwal"
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        link: "https://www.twitter.com/siddhesh0205"
    },
    {
        name: "Hackerrank",
        icon: <FaHackerrank />,
        link: "https://www.hackerrank.com/Siddhesh_Agarwal"
    },
    {
        name: "Hashnode",
        icon: <SiHashnode />,
        link: "https://siddhesh2003.hashnode.dev/"
    },
    {
        name: "Leetcode",
        icon: <SiLeetcode />,
        link: "https://leetcode.com/Siddhesh-Agarwal/"
    },
    {
        name: "Stackoverflow",
        icon: <SiStackoverflow />,
        link: "https://stackoverflow.com/users/14257886/siddhesh-agarwal"
    },
    {
        name: "Hackerearth",
        icon: <SiHackerearth />,
        link: "https://www.hackerearth.com/@siddhesh.agarwal"
    },
]


export default function Links() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <motion.div
            className="bg-white py-5 px-2 rounded-3 border shadow"
            style={{ maxWidth: "45rem", minHeight: "16rem" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className="row">
                <div className="col-12">
                    <h1 className="display-6 text-center">
                        Siddhesh Agarwal
                    </h1>
                    <h2 className="text-center h2 mt-2">
                        CSE Student
                    </h2>
                </div>
            </div>
            {/* Animation to display social links one by one */}
            <div className="row mt-md-4 mt-3">
                <motion.div
                    className="col-12 text-center"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {
                        // Do not render until the animation is complete

                        socialLinks.map(
                            (link) => {
                                return (
                                    <motion.a
                                        href={link.link}
                                        rel="noreferrer noopener" target="_blank"
                                        className="btn m-2 border rounded-circle border-dark fs-5 shadow-sm"
                                        variants={item}
                                        title={link.name}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {link.icon}
                                    </motion.a>
                                )
                            }
                        )
                    }
                </motion.div>
            </div>
            <div className="row mt-md-4 mt-3">
                <div className="col-12 text-center">
                    <motion.a
                        href={require("../assets/Siddhesh_Agarwal-Resume.pdf")}
                        download="Siddhesh_Agarwal-Resume.pdf"
                        rel="noreferrer noopener" target="_blank"
                        className="btn btn-success m-2 border shadow-sm fs-5"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaCloudDownloadAlt />
                        <p className="d-inline-block ms-2 mb-0">
                            Download Resume
                        </p>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
}
