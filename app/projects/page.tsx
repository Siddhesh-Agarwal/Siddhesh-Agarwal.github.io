"use client";

import Navbar from "@/components/Navbar";
import { Project } from "@/types/Project";
import { LinkInfo } from "@/types/Utils";
import Link from "next/link";


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
            { name: "Live", url: "https://ip-database.streamlit.app" }
        ],
        tags: ["Python", "Streamlit", "IP Geolocation"],
        date: { year: 2023, month: 4 }
    },
    {
        name: "Dementia Detection",
        desc: "Dementia Detection using CNN packaged as a Streamlit app",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Dementia-Detection/" },
            { name: "Live", url: "https://dementia-detection.streamlit.app/" }
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
            { name: "Live", url: "https://skin-cancer-check.streamlit.app/" }
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

function ProjectTag({ tag }: { tag: string }) {
    return (
        <span className="bg-gray-200 dark:bg-gray-700 text-white dark:text-gray-50 px-2 py-1 rounded-sm">
            {tag}
        </span>
    )
}

function ProjectLink({ linkObj }: { linkObj: LinkInfo }) {
    return (
        <Link href={linkObj.url} target="_blank" rel="noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline px-0 md:px-1">
            {linkObj.name}<span className="hidden md:inline-block">{"=>"}</span>
        </Link>
    )
}

function ToolCard({ data }: { data: Project }) {
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-lg overflow-x-hidden">
            {/* Display dat in MM-YYYY format i.e. add padding to make 6-2023 to 06-2023 */}
            <div className="text-gray-500 dark:text-gray-400 text-lg md:text-2xl mr-4">
                {data.date.month < 10 ? `0${data.date.month}` : data.date.month}-{data.date.year}
            </div>
            <div className="flex flex-col gap-2">
                {/* Title */}
                <h2 className="text-lg md:text-2xl font-bold dark:text-gray-50">{data.name}</h2>

                {/* Description */}
                <p className="text-md md:text-lg dark:text-gray-50 text-wrap md:text-justify">
                    {data.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-row gap-2 text-xs flex-wrap">
                    {
                        data.tags.map((tag: string, index: number) => (
                            <ProjectTag tag={tag} key={index} />
                        ))
                    }
                </div>

                {/* Links */}
                <div className="flex gap-4 md:gap-6 items-center text-wrap font-semibold">
                    {
                        data.links.map((linkObj: LinkInfo, index: number) => (
                            <ProjectLink linkObj={linkObj} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function DisplayTools({ tools }: { tools: Project[] }) {
    // Sort the tools by date
    tools.sort((a, b) => {
        if (a.date.year === b.date.year) {
            return b.date.month - a.date.month
        }
        return b.date.year - a.date.year
    })

    return (
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 semibold dark:text-gray-50">
                Projects/Tools I{"'"}ve Built:
            </h1>
            {tools.map((tool: Project, index: number) => (
                <ToolCard key={index} data={tool} />
            ))}
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <>
            <Navbar hide="projects" />
            <main className="container px-4 md:px-8 lg:px-12 min-w-full py-6 md:pb-12">
                <DisplayTools tools={ProjectsOrTools} />
            </main>
        </>
    )
}
