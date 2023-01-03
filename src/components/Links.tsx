import React from 'react';
import {
    FaLinkedinIn,
    FaGithub,
    FaKaggle,
    FaDev,
    FaTwitter,
    FaHackerrank
} from 'react-icons/fa';

import {
    SiHashnode,
    SiLeetcode,
    SiStackoverflow,
    SiHackerearth
} from 'react-icons/si';

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

function Links() {
    // Put a white box with a heading saying Siddhesh Agarwal
    // below it write CSE Student
    // list of links in a row as circles
    return (
        <div className="bg-white p-4 rounded-3" style={{maxWidth: "45rem", minHeight: "16rem"}}>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">
                        Siddhesh Agarwal
                    </h1>
                    <h3 className="text-center">
                        CSE Student
                    </h3>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 text-center">
                    {
                        socialLinks.map((link) => {
                            return (
                                <a
                                    href={link.link}
                                    rel="noreferrer noopener" target="_blank"
                                    className="btn m-2 border rounded-circle border-dark fs-5"
                                >
                                    {link.icon}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Links;
