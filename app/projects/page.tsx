"use client";
import ProjectCard from '@/components/ProjectCard'
import { ProjectData } from '@/types/ProjectData'

const ReactProjects: ProjectData[] = [
    {
        title: "Pomofocus clone",
        description: "A clone of the Pomofocus.io website. Helps you focus on your work by using the Pomodoro Technique",
        image: "https://user-images.githubusercontent.com/68057995/220324659-6ef5e3ac-6831-42e1-8190-f7936a111850.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/Pomofocus-Clone/",
        liveURL: "https://pomofocus-vite.vercel.app/",
        tags: ["React", "JavaScript", "SCSS"],
        featured: true,
    },
    {
        title: "GitHub Wrapped",
        description: "A website that Displays the information of a GitHub User or an Organization in a beautiful way",
        image: "https://user-images.githubusercontent.com/68057995/222699221-8e1b319a-a83e-4498-aceb-02737d8437e5.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/github-wrapped/",
        liveURL: "https://github-wrapped-five.vercel.app/",
        tags: ["React", "TypeScript", "GitHub API", "Bootstrap"],
    },
    {
        title: "Pokemon Mu",
        description: "Pokemon Mu is an app that generates a random Pokemon Card",
        image: "https://raw.githubusercontent.com/Siddhesh-Agarwal/pokemon/43d063e05fb48bd3252d87286041cca36b9e25a7/Seviper.jpeg",
        githubURL: "https://github.com/Siddhesh-Agarwal/pokemon/",
        liveURL: "https://pokemon-mu-pied.vercel.app/",
        tags: ["React", "TypeScript", "Tailwind"],
    },
]

const PythonProjects: ProjectData[] = [
    {
        title: "Matmath",
        description: "A Python library to perform matrix and Vector operations. Published on PyPI.",
        githubURL: "https://github.com/Siddhesh-Agarwal/matmath/",
        liveURL: "https://pypi.org/project/matmath/",
        tags: ["Python", "PyPI Package", "Maths"],
        featured: true,
    },
    {
        title: "Secure-Spark",
        description: "DevToys for cyber security",
        githubURL: "https://github.com/Siddhesh-Agarwal/Secure-Spark/",
        tags: ["Python", "Cyber Security"],
        featured: true,
    },
    {
        title: "IP Database",
        description: "A Python API to get information about an IP address. Made using streamlit. Deployed on Streamlit Cloud.",
        githubURL: "https://github.com/Siddhesh-Agarwal/IP-DB/",
        liveURL: "https://ip-database.streamlit.app",
        tags: ["Python", "Streamlit"],
        featured: true,
    },
    {
        title: "Sierra",
        description: "A Python library to write HTML and CSS in pure Python in a simple yet elegant manner using the DOM API. Take advantage of all of Python's powerful functionalities with Sierra. Published on PyPI.",
        githubURL: "https://github.com/BrainStormYourWayIn/sierra/",
        liveURL: "https://pypi.org/project/sierra/",
        tags: ["Python", "PyPI Package", "HTML", "CSS"],
        featured: true,
    },
    {
        title: "Cryptmoji",
        description: "A Python library to encrypt and decrypt messages using emojis. Published on PyPI.",
        githubURL: "https://github.com/Siddhesh-Agarwal/Cryptmoji/",
        liveURL: "https://pypi.org/project/cryptmoji/",
        tags: ["Python", "PyPI Package", "Cyber Security"],
    },
    {
        title: "Newsful News",
        description: "A simple news extractor that extracts the news from the given url and displays it in a simple UI. It can bypass the paywalls and ad blocks to extract the news.",
        githubURL: "https://github.com/Siddhesh-Agarwal/news-extractor/",
        liveURL: "https://newsful-news.onrender.com/",
        tags: ["Python", "Flask", "Web Scraping"],
    },
    {
        title: "Scientific Computing with Python",
        description: `Projects for FreeCodeCamp's "Scientific Computing with Python" Certificate.`,
        githubURL: "https://github.com/Siddhesh-Agarwal/FreeCodeCamp-Python-Challenges/",
        tags: ["Python", "Scientific Computing", "FreeCodeCamp"],
    },
    {
        title: "Data Analysis with Python",
        description: `Projects for FreeCodeCamp's "Data Analysis with Python" Certificate.`,
        githubURL: "https://github.com/Siddhesh-Agarwal/Data-Analysis-with-Python/",
        tags: ["Python", "Data Analysis", "FreeCodeCamp"],
    },
]

const AIProjects: ProjectData[] = [
    {
        title: "Newsful",
        description: "Advanced Fake News Detection System",
        githubURL: "https://github.com/centille/Newsful/",
        tags: ["FastAPI", "LangChain.py", "HTML", "Bootstrap", "GenAI"],
        featured: true,
    },
    {
        title: "Skin Cancer Detection",
        description: "Skin Cancer Detection using CNN",
        githubURL: "https://github.com/Siddhesh-Agarwal/Skin-Cancer-Detection/",
        liveURL: "https://skin-cancer-check.streamlit.app/",
        tags: ["Python", "TensorFlow", "Streamlit", "CNN"],
        featured: true,
    },
    {
        title: "Strains RAG",
        description: "An RAG Model based on Kenneth Reitz's StrainsDB.",
        githubURL: "https://github.com/Siddhesh-Agarwal/straindb-rag/",
        liveURL: "https://straindb.streamlit.app/",
        tags: ["Python", "Streamlit", "LangChain.py", "GenAI"],
        featured: true,
    },
    {
        title: "ChatSKCET",
        description: "Chatbot for SKCET",
        githubURL: "https://github.com/Siddhesh-Agarwal/ChatSKCET/",
        tags: ["LangChain.py", "TypeScript", "Next", "GenAI"],
    },
    {
        title: "Dementia Detection",
        description: "Dementia Detection using CNN",
        githubURL: "https://github.com/Siddhesh-Agarwal/Dementia-Detection/",
        liveURL: "https://dementia-detection.streamlit.app/",
        tags: ["Python", "TensorFlow", "Streamlit", "CNN"],
    },
    {
        title: "Neural Network in C",
        description: "Implementation of sigmoid and relu layer along with various types of regressions in plain C",
        githubURL: "https://github.com/Siddhesh-Agarwal/Neural-Network-in-C/",
        tags: ["C", "Deep Learning", "Maths"],
    },
]

const MiscellaneousProjects: ProjectData[] = [
    {
        title: "Lab Management System",
        description: "A project to manage lab resources and student allocation in SKCET Labs",
        githubURL: "https://github.com/lab-management-system/",
        tags: ["PHP", "Laravel", "Blade", "Python"],
        featured: true,
    },
    {
        title: "URL-2-Chroma",
        description: "A streamlit app to generate chroma DB locally",
        githubURL: "https://github.com/Siddhesh-Agarwal/URL-2-Chroma/",
        tags: ["Python", "Streamlit", "Chroma", "VectorDB"],
    },
    {
        title: "Project Byomkesh",
        description: "A project to analyse tweets using Python and Streamlit",
        githubURL: "https://github.com/Siddhesh-Agarwal/Project-Byomkesh/",
        tags: ["Python", "Streamlit", "OSINT"],
    }
]

export default function ProjectsPage() {
    return (
        <div className="container px-4 md:px-8 lg:px-12 min-w-full bg-white dark:bg-gray-900 py-6 md:pb-12">
            <h1 className="text-4xl font-bold text-center mb-6 semibold underline dark:text-gray-50">
                Projects
            </h1>

            {/* Python Projects */}
            <section id="python">
                <h2 className="text-2xl font-bold m-6 underline dark:text-gray-100">
                    Python
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        PythonProjects.map(
                            (project: ProjectData, index: number) => (
                                <ProjectCard props={project} key={index} />
                            )
                        )
                    }
                </div>
            </section>

            {/* React Projects */}
            <section id="frontend">
                <h2 className="text-2xl font-bold m-6 underline dark:text-gray-100">
                    Frontend
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        ReactProjects.map(
                            (project, index) => (
                                <ProjectCard props={project} key={index} />
                            )
                        )
                    }
                </div>
            </section>

            {/* AI Projects */}
            <section id="ai">
                <h2 className="text-2xl font-bold m-6 underline dark:text-gray-100">
                    AI
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        AIProjects.map(
                            (project: ProjectData, index: number) => (
                                <ProjectCard props={project} key={index} />
                            )
                        )
                    }
                </div>
            </section>

            {/* Miscellaneous Projects */}
            <section id="miscellaneous">
                <h2 className="text-2xl font-bold m-6 underline dark:text-gray-100">
                    Miscellaneous
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        MiscellaneousProjects.map(
                            (project: ProjectData, index: number) => (
                                <ProjectCard props={project} key={index} />
                            )
                        )
                    }
                </div>
            </section>
        </div>
    )
}
