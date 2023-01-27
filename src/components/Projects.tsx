import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';


type ProjectData = {
    id: string;
    title: string;
    description: string;
    link: string;
}


const projectData: ProjectData[] = [
    {
        id: "1",
        title: "Matmath",
        description: "An open-source python library for matrix and vector operations. Made in python 3 without any dependency. Creates a beautiful representation of matrices and vectors (print to check).",
        link: "https://github.com/siddhesh-agarwal/matmath",
    },
    {
        id: "2",
        title: "Sierra",
        description: "Sierra is a Python library to write HTML and CSS in pure Python using the DOM API. It is a very simple and easy-to-use library. It allows the user to take advantage of Python's powerful functionalities with ease.",
        link: "https://github.com/BrainStormYourWayIn/sierra",
    },
    {
        id: "3",
        title: "Cryptmoji",
        description: "A simple emoji-based encryption-decryption library.",
        link: "https://github.com/Siddhesh-Agarwal/Cryptmoji",
    },
    {
        id: "4",
        title: "Python Algorithms",
        description: "A collection of algorithms implemented in Python.",
        link: "https://github.com/Siddhesh-Agarwal/Python-Algorithms/",
    },
    {
        id: "5",
        title: "GitHub Wrapped",
        description: "A simple web app to show your GitHub stats in a beautiful way. Made using React, TypeScript, Bootstrap and GitHub API.",
        link: "https://github.com/Siddhesh-Agarwal/GitHub-Wrapped/",
    },
    {
        id: "6",
        title: "Neural Network in C",
        description: "A simple neural network written in C. It is a feed-forward neural network with one hidden layer. It uses the sigmoid activation function. Check out if interested in Maths and Neural Networks.",
        link: "https://github.com/Siddhesh-Agarwal/Neural-Network-in-C",
    },
    {
        id: "7",
        title: "Cheat Sheets",
        description: "A collection of cheat sheets for various programming languages and tools.",
        link: "https://github.com/Siddhesh-Agarwal/Cheatsheets",
    },
    {
        id: "8",
        title: "Project Diagnose",
        description: "A web app to diagnose for skin cancer using machine learning. It has a map to show the location of dermatologists in an city. Made using Python, Streamlit, TensorFlow and Google Maps API.",
        link: "https://github.com/Siddhesh-Agarwal/PoweringSTEMHacks"
    }
]


function ProjectCard(props: ProjectData) {
    return (
        <motion.div
            className="card my-md-3 mx-md-2 mx-auto my-2 shadow-sm"
            style={{ maxWidth: "18rem", backgroundColor: "#f8f9fa" }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                className="card-body px-1 py-2 d-flex flex-column justify-content-between"
            >
                <motion.div className="d-block mb-3">
                    <motion.h3
                        className="card-title mb-3 text-decoration-underline"
                        style={{ textAlign: "center" }}
                    >
                        {props.title}
                    </motion.h3>
                    <motion.p
                        className="card-text lead fs-6"
                        style={{ textAlign: "justify" }}
                    >
                        {props.description}
                    </motion.p>
                </motion.div>

                <motion.a
                    href={props.link}
                    target="_blank" rel="noreferrer noopener"
                    className="btn btn-primary d-block"
                    whileHover={{ scaleX: 1.05 }}
                    whileTap={{ scaleX: 0.95 }}
                >
                    <FaGithub />
                    <motion.p
                        className="d-inline mx-2"
                        style={{ textAlign: "center" }}
                    >
                        GitHub
                    </motion.p>
                </motion.a>
            </motion.div>
        </motion.div>
    )
}


export default function Projects() {
    return (
        <div className='my-5'>
            <h2 className="text-dark">
                Projects
            </h2>
            <p className="text-dark lead">
                Here are some of my projects.
            </p>
            <div className="row">
                {
                    projectData.map(
                        (project) => (
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}
