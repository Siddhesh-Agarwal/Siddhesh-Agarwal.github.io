"use client";

import {
    SiApachespark,
    SiAmazonwebservices,
    SiBootstrap,
    SiC,
    SiCloudflare,
    SiCplusplus,
    SiDeno,
    SiDjango,
    SiDocker,
    SiExpress,
    SiFastapi,
    SiFlask,
    SiGit,
    SiGithub,
    SiGmail,
    SiGnubash,
    SiGo,
    SiHashnode,
    SiJavascript,
    SiLaravel,
    SiLinkedin,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNeo4J,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPython,
    SiPytorch,
    SiReact,
    SiRedis,
    SiScikitlearn,
    SiScipy,
    SiShadcnui,
    SiStreamlit,
    SiTailwindcss,
    SiTensorflow,
    SiTypescript,
    SiVercel,
    SiHtml5,
    SiCss3,
    SiPypy,
} from "react-icons/si";
import { ExperienceDetail, Project, SocialLink, ToolLink } from "@/types/Utils";
import ProjectsSection from "@/components/project";
import ExperienceSection from "@/components/experience";
import DockNav from "@/components/dockNav";
import IntroSection from "@/components/Intro";
import { FaBriefcase, FaCircleInfo, FaFlask } from "react-icons/fa6";


// Data
const ProjectsOrTools: Project[] = [
    {
        name: "LLMPrice.fyi",
        desc: "A simple no-nonsense price calculator for various LLM providers.",
        links: [
            { name: "Frontend", url: "https://github.com/Siddhesh-Agarwal/llm-price-calculator" },
            { name: "Backend", url: "https://github.com/Siddhesh-Agarwal/api-llm-price" },
            { name: "Live", url: "https://llmprice.fyi/" }
        ],
        tags: ["React", "TypeScript", "SWC", "Golang", "Cloudflare Workers"],
        date: { year: 2024, month: 12 }
    },
    {
        name: "Jokes API",
        desc: "A simple API to get jokes via a LLM",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/cf-ai-jokes" },
            { name: "Live", url: "https://sparkling-dust-9b63.siddhesh-agarwal.workers.dev/" },
        ],
        tags: ["JavaScript", "Cloudflare Workers", "Gen AI"],
        date: { year: 2024, month: 11 }
    },
    {
        name: "Strains RAG",
        desc: "An Basic RAG based on Kenneth Reitz's StrainsDB - A Database of Cannabis Strains.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/straindb-rag/" },
            { name: "Live", url: "https://straindb.streamlit.app/" }
        ],
        tags: ["Python", "Streamlit", "Langchain"],
        date: { year: 2024, month: 3 }
    },
    {
        name: "Uploadid",
        desc: "Uploadid is a web application that helps colleges and universities keep track of their Faculty participation and achievements through an easy-to-understand Web User Interface.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/uploadid" },
            { name: "Live", url: "https://uploadid.vercel.app/" }
        ],
        tags: ["Next", "TypeScript", "ShadCN UI", "Supabase", "Vercel"],
        date: { year: 2024, month: 2 }
    },
    {
        name: "Newsful",
        desc: "Advanced Fake News Detection System built for the Kavach Cybersecurity Hackathon 2023",
        links: [
            { name: "GitHub", url: "https://github.com/centille/Newsful/" }
        ],
        tags: ["Python", "FastAPI", "OpenAI", "AI Agents", "MongoDB"],
        date: { year: 2023, month: 7 }
    },
    {
        name: "IP Database",
        desc: "A Python API to get information about an IP address. Made using streamlit. Deployed on Streamlit Cloud.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/IP-DB/" },
            // { name: "Live", url: "https://ip-database.streamlit.app" }
        ],
        tags: ["Python", "Streamlit", "IP Geolocation"],
        date: { year: 2023, month: 4 }
    },
    {
        name: "Dementia Detection",
        desc: "Dementia Detection using CNN packaged as a Streamlit app",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Dementia-Detection/" },
            // { name: "Live", url: "https://dementia-detection.streamlit.app/" }
        ],
        tags: ["Python", "Streamlit", "TensorFlow", "CNN"],
        date: { year: 2023, month: 3 }
    },
    {
        name: "CGPA Calculator",
        desc: "A simple no-nonsense CGPA Calculator",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/CGPA-Calculator" },
            { name: "Live", url: "https://cgpa-calc.streamlit.app/" }
        ],
        tags: ["Python", "Streamlit"],
        date: { year: 2023, month: 2 }
    },
    {
        name: "Skin Cancer Detection",
        desc: "Skin Cancer Detection using CNN packaged as a Streamlit app",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Skin-Cancer-Detection/" },
            // { name: "Live", url: "https://skin-cancer-check.streamlit.app/" }
        ],
        tags: ["Python", "Streamlit", "TensorFlow", "CNN"],
        date: { year: 2023, month: 1 }
    },
    {
        name: "Cryptmoji",
        desc: "A Python library to encrypt and decrypt messages using emojis. Published on PyPI.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Cryptmoji/" },
            { name: "PyPI", url: "https://pypi.org/project/cryptmoji/" }
        ],
        tags: ["Python", "PyPI", "Crytography"],
        date: { year: 2022, month: 9 }
    },
    {
        name: "Secure-Spark",
        desc: "DevToys for cyber security",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Secure-Spark/" }
        ],
        tags: ["Python", "Streamlit", "Cyber Security"],
        date: { year: 2022, month: 8 }
    },
    {
        name: "Sierra",
        desc: "A Python library to write HTML and CSS in pure Python in a simple yet elegant manner using the DOM API.",
        links: [
            { name: "GitHub", url: "https://github.com/BrainStormYourWayIn/sierra/" },
            { name: "PyPI", url: "https://pypi.org/project/sierra/" }
        ],
        tags: ["Python", "PyPI", "HTML", "CSS", "JavaScript"],
        date: { year: 2021, month: 6 }
    },
    {
        name: "Matmath",
        desc: "A Python library to perform matrix and Vector operations. Published on PyPI.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/matmath/" },
            { name: "PyPI", url: "https://pypi.org/project/matmath/" }
        ],
        tags: ["Python", "PyPI", "Maths"],
        date: { year: 2021, month: 6 }
    },
    {
        name: "Lab Management System",
        desc: "A lab management system including student attendance, lab inventory management, bill management, and report generation. Currently in use across all the 11 CS/IT Labs in SKCET.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/lab-management-system" }
        ],
        tags: ["PHP", "Laravel", "Blade", "Python", "Streamlit"],
        date: { year: 2023, month: 3 }
    }
]

const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        icon: SiGithub,
        link: "https://www.github.com/siddhesh-agarwal/"
    },
    {
        name: "Gmail",
        icon: SiGmail,
        link: "mailto:siddhesh.agarwal@gmail.com"
    },
    {
        name: "Hashnode",
        icon: SiHashnode,
        link: "https://siddhesh2003.hashnode.dev/"
    },
    {
        name: "LinkedIn",
        icon: SiLinkedin,
        link: "https://www.linkedin.com/in/siddhesh-agarwal/"
    },
]

const ExperienceDetails: ExperienceDetail[] = [
    {
        startDate: { month: 4, year: 2022 },
        endDate: { month: 10, year: 2022 },
        company: "IIT Madras",
        position: "Junior WebOps Developer",
        location: "remote"
    },
    {
        startDate: { month: 3, year: 2023 },
        endDate: { month: 4, year: 2024 },
        company: "SKCET",
        position: "Full Stack Developer Intern",
        location: "Coimbatore, India"
    },
    {
        startDate: { month: 6, year: 2024 },
        endDate: { month: 1, year: 2025 },
        company: "HyperVerge",
        position: "Data Engineer Intern",
        location: "Bengaluru, India"
    },
]

const introLinks: ToolLink[][] = [
    [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Neo4j", icon: SiNeo4J },
        { name: "Redis", icon: SiRedis },
        { name: "Apache Spark", icon: SiApachespark },
    ],
    [
        { name: "Python", icon: SiPython },
        { name: "PyPy", icon: SiPypy },
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "PHP", icon: SiPhp },
        { name: "Go", icon: SiGo },
        { name: "GNU Bash", icon: SiGnubash },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
    ],
    [
        { name: "FastAPI", icon: SiFastapi },
        { name: "Flask", icon: SiFlask },
        { name: "Django", icon: SiDjango },
        { name: "SciPy", icon: SiScipy },
        { name: "PyTorch", icon: SiPytorch },
        { name: "Scikit Learn", icon: SiScikitlearn },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Streamlit", icon: SiStreamlit },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "ShadCN UI", icon: SiShadcnui },
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Deno", icon: SiDeno },
        { name: "Laravel", icon: SiLaravel },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Linux", icon: SiLinux },
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: SiAmazonwebservices },
        { name: "Cloudflare", icon: SiCloudflare },
        { name: "Vercel", icon: SiVercel },
    ]
];

const sectionNav: SocialLink[] = [
    {
        name: "Introduction",
        link: "#intro",
        icon: FaCircleInfo
    },
    {
        name: "Experience",
        link: "#experience",
        icon: FaBriefcase
    },
    {
        name: "Projects",
        link: "#projects",
        icon: FaFlask,
    },
]

// Components
export default function HomePage() {
    return (
        <main className="container-fluid p-0 min-h-screen w-full overflow-x-hidden">
            <div className="max-w-4xl mx-0 md:mx-auto">
                {/* Intro Section */}
                <section className="container min-h-screen w-full px-0 grid place-items-center" id="intro">
                    <IntroSection links={introLinks} />
                </section>

                {/* Experience Section */}
                <section className="container min-h-screen min-w-full px-0 py-6 md:pb-12" id="experience">
                    <ExperienceSection details={ExperienceDetails} />
                </section>

                {/* Projects Section */}
                <section className="container min-h-screen min-w-full px-0 py-6 md:pb-12" id="projects">
                    <ProjectsSection details={ProjectsOrTools} />
                </section>
            </div>
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto flex origin-bottom h-full max-h-14 mb-16">
                <DockNav sectionNav={sectionNav} socialLinks={socialLinks} />
            </div>
        </main>
    )
}
