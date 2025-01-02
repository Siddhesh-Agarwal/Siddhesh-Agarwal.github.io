"use client";

type CustomDate = {
    year: number
    month: number
}

type Link = {
    name: string
    url: string
}

type Tool = {
    name: string
    desc: string
    links?: Link[]
    date: CustomDate
}


const ProjectsorTools: Tool[] = [
    {
        name: "LLMPrice.fyi",
        desc: "A simple no-nonsense price calculator for various LLM providers.",
        links: [
            { name: "Frontend", url: "https://github.com/Siddhesh-Agarwal/llm-price-calculator" },
            { name: "Backend", url: "https://github.com/Siddhesh-Agarwal/api-llm-price" },
            { name: "Live", url: "https://llmprice.fyi/" }
        ],
        date: { year: 2024, month: 12 }
    },
    {
        name: "Jokes API",
        desc: "A simple API to get jokes via a LLM",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/cf-ai-jokes" },
            { name: "Live", url: "https://sparkling-dust-9b63.siddhesh-agarwal.workers.dev/" },
        ],
        date: { year: 2024, month: 11 }
    },
    {
        name: "Strains RAG",
        desc: "An Basic RAG based on Kenneth Reitz's StrainsDB - A Database of Cannabis Strains.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/straindb-rag/" },
            { name: "Live", url: "https://straindb.streamlit.app/" }
        ],
        date: { year: 2024, month: 3 }
    },
    {
        name: "Uploadid",
        desc: "Uploadid is a web application that helps colleges and universities keep track of their Faculty participation and achievements through an easy-to-understand Web User Interface.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/uploadid" },
            { name: "Live", url: "https://uploadid.vercel.app/" }
        ],
        date: { year: 2024, month: 2 }
    },
    {
        name: "Newsful",
        desc: "Advanced Fake News Detection System built for the Kavach Cybersecurity Hackathon 2023",
        links: [
            { name: "GitHub", url: "https://github.com/centille/Newsful/" }
        ],
        date: { year: 2023, month: 7 }
    },
    {
        name: "IP Database",
        desc: "A Python API to get information about an IP address. Made using streamlit. Deployed on Streamlit Cloud.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/IP-DB/" },
            { name: "Live", url: "https://ip-database.streamlit.app" }
        ],
        date: { year: 2023, month: 4 }
    },
    {
        name: "Dementia Detection",
        desc: "Dementia Detection using CNN packaged as a Streamlit app",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Dementia-Detection/" },
            { name: "Live", url: "https://dementia-detection.streamlit.app/" }
        ],
        date: { year: 2023, month: 3 }
    },
    {
        name: "CGPA Calculator",
        desc: "A simple no-nonsense CGPA Calculator",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/CGPA-Calculator" },
            { name: "Live", url: "https://cgpa-calc.streamlit.app/" }
        ],
        date: { year: 2023, month: 2 }
    },
    {
        name: "Skin Cancer Detection",
        desc: "Skin Cancer Detection using CNN packaged as a Streamlit app",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Skin-Cancer-Detection/" },
            { name: "Live", url: "https://skin-cancer-check.streamlit.app/" }
        ],
        date: { year: 2023, month: 1 }
    },
    {
        name: "Cryptmoji",
        desc: "A Python library to encrypt and decrypt messages using emojis. Published on PyPI.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Cryptmoji/" },
            { name: "Live", url: "https://pypi.org/project/cryptmoji/" }
        ],
        date: { year: 2022, month: 9 }
    },
    {
        name: "Secure-Spark",
        desc: "DevToys for cyber security",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/Secure-Spark/" }
        ],
        date: { year: 2022, month: 8 }
    },
    {
        name: "Sierra",
        desc: "A Python library to write HTML and CSS in pure Python in a simple yet elegant manner using the DOM API. Take advantage of all of Python's powerful functionalities with Sierra. Published on PyPI.",
        links: [
            { name: "GitHub", url: "https://github.com/BrainStormYourWayIn/sierra/" },
            { name: "Live", url: "https://pypi.org/project/sierra/" }
        ],
        date: { year: 2021, month: 6 }
    },
    {
        name: "Matmath",
        desc: "A Python library to perform matrix and Vector operations. Published on PyPI.",
        links: [
            { name: "GitHub", url: "https://github.com/Siddhesh-Agarwal/matmath/" },
            { name: "Live", url: "https://pypi.org/project/matmath/" }
        ],
        date: { year: 2021, month: 6 }
    },
]

function ToolCard({ data }: { data: Tool }) {
    return (
        <div className="flex flex-row bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            {/* Display dat in MM-YYYY format i.e. add padding to make 6-2023 to 06-2023 */}
            <div className="text-gray-500 dark:text-gray-400 text-2xl mr-4">
                {data.date.month < 10 ? `0${data.date.month}` : data.date.month}-{data.date.year}
            </div>
            <div>
                <h2 className="text-2xl font-bold dark:text-gray-50">{data.name}</h2>
                <p className="text-lg dark:text-gray-50 text-wrap text-justify">
                    {data.desc}
                </p>
                <div className="flex gap-6 items-center mt-4">
                    {
                        data.links?.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline px-1">
                                {`${link.name} =>`}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function DisplayTools({ tools }: { tools: Tool[] }) {
    // Sort the tools by date
    tools.sort((a, b) => {
        if (a.date.year === b.date.year) {
            return b.date.month - a.date.month
        }
        return b.date.year - a.date.year
    })

    return (
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
                <ToolCard key={index} data={tool} />
            ))}
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <div className="container px-4 md:px-8 lg:px-12 min-w-full bg-white dark:bg-gray-900 py-6 md:pb-12">
            <h1 className="text-4xl font-bold mb-6 semibold dark:text-gray-50">
                Projects/Tools I{"'"}ve Built:
            </h1>
            <DisplayTools tools={ProjectsorTools} />
        </div>
    )
}
