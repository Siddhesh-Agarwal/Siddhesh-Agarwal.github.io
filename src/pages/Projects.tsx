import ProjectCard from "../components/ProjectCard"
import { ProjectData } from "../types/ProjectData"

const ReactProjects: ProjectData[] = [
    {
        title: "GitHub Wrapped",
        description: "A website that Displays the information of a GitHub User or an Organization in a beautiful way",
        image: "https://user-images.githubusercontent.com/68057995/222699221-8e1b319a-a83e-4498-aceb-02737d8437e5.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/github-wrapped",
        liveURL: "https://Siddhesh-Agarwal.github.io/github-wrapped",
        tags: ["React", "TypeScript", "GitHub API", "Bootstrap"]
    },
    {
        title: "Pomofocus clone",
        description: "A clone of the Pomofocus.com website. Helps you focus on your work by using the Pomodoro Technique",
        image: "https://user-images.githubusercontent.com/68057995/220324659-6ef5e3ac-6831-42e1-8190-f7936a111850.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/Pomofocus-Clone",
        liveURL: "https://Siddhesh-Agarwal.github.io/Pomofocus-Clone",
        tags: ["React", "JavaScript", "SCSS"]
    },
    {
        title: "Markdown Previewer",
        description: "A website to preview markdown. Made using React and TypeScript",
        image: "https://user-images.githubusercontent.com/68057995/220251802-c3bb6053-bb88-4a4d-8058-fe293d10ff2b.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/markdown-previewer",
        liveURL: "https://Siddhesh-Agarwal.github.io/markdown-previewer",
        tags: ["React", "TypeScript", "CSS"]
    },
    {
        title: "Random Quote Machine",
        description: "A website to display random quotes. Made using React and JavaScript",
        image: "https://user-images.githubusercontent.com/68057995/222700210-21247e1e-0888-444c-acda-76fddebfa32a.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/random-quotes",
        liveURL: "https://Siddhesh-Agarwal.github.io/random-quotes",
        tags: ["React", "JavaScript", "CSS"]
    },
    {
        title: "Drum Machine",
        description: "A website to play drum sounds. Made using React and JavaScript",
        image: "https://user-images.githubusercontent.com/68057995/220309912-5c386afa-6b6c-4cb2-9d7b-563218e61e63.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/drum-machine",
        liveURL: "https://Siddhesh-Agarwal.github.io/drum-machine",
        tags: ["React", "JavaScript", "CSS"]
    },
    {
        title: "Social Links",
        description: "Links page to use in Social media bio. Made using React and TypeScript",
        image: "https://user-images.githubusercontent.com/68057995/223019059-61f31bfe-37c2-4eac-9819-e9ef46a915a6.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/social-links",
        liveURL: "https://siddhesh-agarwal.github.io/social-links/",
        tags: ["React", "TypeScript", "CSS"]
    },
    {
        title: "TS Calculator",
        description: "A calculator made using React and TypeScript",
        image: "https://user-images.githubusercontent.com/68057995/223019819-3b71ec92-f24e-4413-9eff-59e2fe8f22cf.png",
        githubURL: "https://github.com/Siddhesh-Agarwal/TS-Calculator",
        liveURL: "https://siddhesh-agarwal.github.io/TS-Calculator/",
        tags: ["React", "TypeScript", "CSS"]
    },
    {
        title: "Webpage Superhero",
        description: "A website to display the superpowers of a superhero. Made using HTML and Tailwind",
        image: "https://user-images.githubusercontent.com/68057995/222711491-8bcf824d-8b9c-4fa3-8a24-4f0caef2113c.png",
        githubURL: "https://siddhesh-agarwal.github.io/webpage-superpowers/",
        liveURL: "https://siddhesh-agarwal.github.io/webpage-superpowers/",
        tags: ["HTML", "TailwindCSS"]
    },
]

const PythonProjects: ProjectData[] = [
    {
        title: "Sierra",
        description: "A Python library to write HTML and CSS in pure Python in a simple yet elegant manner using the DOM API. Take advantage of all of Python's powerful functionalities with Sierra. Published on PyPI.",
        githubURL: "https://github.com/BrainStormYourWayIn/sierra/",
        liveURL: "https://pypi.org/project/sierra/",
        tags: ["Python", "PyPI Package", "web dev"]
    },
    {
        title: "Matmath",
        description: "A Python library to perform matrix and Vector operations. Published on PyPI.",
        githubURL: "https://github.com/Siddhesh-Agarwal/matmath",
        liveURL: "https://pypi.org/project/matmath/",
        tags: ["Python", "PyPI Package", "maths"]
    },
    {
        title: "Cryptmoji",
        description: "A Python library to encrypt and decrypt messages using emojis. Published on PyPI.",
        githubURL: "https://github.com/Siddhesh-Agarwal/Cryptmoji",
        liveURL: "https://pypi.org/project/cryptmoji/",
        tags: ["Python", "PyPI Package", "cyber security"]
    },
    {
        title: "CGPA Calculator",
        description: "A Web App to calculate Cumilative and Semester GPA. Made using Python and Streamlit. Deployed on Streamlit Cloud.",
        githubURL: "https://github.com/Siddhesh-Agarwal/CGPA-Calculator",
        liveURL: "https://cgpa-calc.streamlit.app/",
        tags: ["Python", "streamlit"]
    },
    {
        title: "IP Database",
        description: "A Python API to get information about an IP address. Made using streamlit. Deployed on Streamlit Cloud.",
        githubURL: "https://github.com/Siddhesh-Agarwal/IP-DB",
        liveURL: "https://ip-database.streamlit.app",
        tags: ["Python", "streamlit"]
    },
    {
        title: "Figlet API",
        description: "A Python API to convert text to ASCII art. Made using FastAPI and pyFiglet. Deployed on Render.",
        githubURL: "https://github.com/Siddhesh-Agarwal/figlet-api",
        liveURL: "http://figlet-api.onrender.com/",
        tags: ["Python", "FastAPI"]
    },
    {
        title: "Newsful News",
        description: "A simple news extractor that extracts the news from the given url and displays it in a simple UI. It can bypass the paywalls and ad blocks to extract the news.",
        githubURL: "https://github.com/Siddhesh-Agarwal/news-extractor",
        liveURL: "https://newsful-news.onrender.com/",
        tags: ["Python", "Flask", "Web Scraping"]
    },
    {
        title: "Scientific Computing with Python",
        description: `Projects for FreeCodeCamp's "Scientific Computing with Python" Certificate.`,
        githubURL: "https://github.com/Siddhesh-Agarwal/FreeCodeCamp-Python-Challenges",
        tags: ["Python", "Scientific Computing", "FreeCodeCamp"]
    },
    {
        title: "Data Analysis with Python",
        description: `Projects for FreeCodeCamp's "Data Analysis with Python" Certificate.`,
        githubURL: "https://github.com/Siddhesh-Agarwal/Data-Analysis-with-Python",
        tags: ["Python", "Data Analysis", "FreeCodeCamp"]
    },
]

export default function Projects() {
    return (
        <div className="container px-3 min-w-full bg-white dark:bg-gray-800 py-6 md:pb-12 mx-0">
            <h1 className="text-4xl font-bold text-center mb-6 semibold underline dark:text-gray-50">
                Projects
            </h1>
            <section id="react">
                <h2 className="text-2xl font-bold m-6 underline dark:text-gray-100">
                    React
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
        </div>
    )
}
