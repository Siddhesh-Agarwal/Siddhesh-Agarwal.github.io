import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projectData = [
    {
        title: "Matmath",
        description: "An open-source python library for matrix and vector operations. Made in python 3 without any dependency. Creates a beautiful representation of matrices and vectors (print to check).",
        link: "https://github.com/siddhesh-agarwal/matmath",
    },
    {
        title: "Sierra",
        description: "Sierra is a Python library to write HTML and CSS in pure Python using the DOM API. It is a very simple and easy-to-use library. It allows the user to take advantage of Python's powerful functionalities with ease.",
        link: "https://github.com/BrainStormYourWayIn/sierra",
    },
    {
        title: "Cryptmoji",
        description: "A simple emoji-based encryption-decryption library.",
        link: "https://github.com/Siddhesh-Agarwal/Cryptmoji",
    },
    {
        title: "Python Algorithms",
        description: "A collection of algorithms implemented in Python.",
        link: "https://github.com/Siddhesh-Agarwal/Python-Algorithms/",
    },
    {
        title: "GitHub Wrapped",
        description: "A simple web app to show your GitHub stats in a beautiful way.",
        link: "https://github.com/Siddhesh-Agarwal/GitHub-Wrapped/",
    },
    {
        title: "Neural Network in C",
        description: "A simple neural network written in C.",
        link: "https://github.com/Siddhesh-Agarwal/Neural-Network-in-C",
    },
    {
        title: "Cheat Sheets",
        description: "A collection of cheat sheets for various programming languages and tools.",
        link: "https://github.com/Siddhesh-Agarwal/Cheatsheets",
    }
]


type ProjectData = {
    title: string;
    description: string;
    link: string;
}

function ProjectCard(props: ProjectData) {
    // place the text and content on top od card and the button at the bottom
    return (
        <div
            className="card my-3 mx-2"
            style={{ maxWidth: "18rem", backgroundColor: "#f8f9fa" }}>
            <div className="card-body px-1 py-2 d-flex flex-column justify-content-between">
                <div className="d-block mb-3">
                    <h3 className="card-title mb-3 text-decoration-underline">
                        {props.title}
                    </h3>
                    <p className="card-text lead fs-6" style={{ textAlign: "justify" }}>
                        {props.description}
                    </p>
                </div>

                <a href={props.link} className="btn btn-primary d-block">
                    <FaGithub />
                    <p className="d-inline mx-2">
                        GitHub
                    </p>
                </a>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className='mt-5'>
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

export default Projects;
