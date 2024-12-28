"use client";
import ProjectCard from "@/components/ProjectCard"
import { ProjectData } from "@/types/ProjectData"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const JavaScriptProjects: ProjectData[] = [
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
        title: "LLM Price Calculator",
        description: "A simple no-nonsense price calculator for LLM providers like OpenAI, Claude, and Google based on Input and Output Tokens.",
        image: "https://github.com/user-attachments/assets/a6e4f7be-7382-4d8a-af25-4280210747e9",
        githubURL: "https://github.com/Siddhesh-Agarwal/llm-price-calculator",
        liveURL: "https://llm-price-calculator.pages.dev/",
        tags: ["Vite", "React", "TypeScript", "SWC"],
        featured: true,
    },
    {
        title: "GitHub Summary",
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
    {
        title: "Jokes API",
        description: "A simple API to get jokes via a LLM",
        githubURL: "https://github.com/Siddhesh-Agarwal/cf-ai-jokes",
        liveURL: "https://sparkling-dust-9b63.siddhesh-agarwal.workers.dev/",
        tags: ["JavaScript", "Cloudflare", "Gen AI"],
    },
    {
        title: "Uploadid",
        description: "Uploadid is a web application that helps colleges and universities keep track of their Faculty participation and achievements through an easy-to-understand Web User Interface.",
        githubURL: "https://github.com/Siddhesh-Agarwal/uploadid",
        liveURL: "https://uploadid.vercel.app/",
        tags: ["Next.js", "TypeScript", "Supabase"],
        featured: true,
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
        title: "CGPA Calculator",
        description: "A simple no-nonsense CGPA Calculator",
        githubURL: "https://github.com/Siddhesh-Agarwal/CGPA-Calculator",
        liveURL: "https://cgpa-calc.streamlit.app/",
        tags: ["Python", "Streamlit"]
    }
]

const AIProjects: ProjectData[] = [
    {
        title: "Newsful",
        description: "Advanced Fake News Detection System",
        githubURL: "https://github.com/centille/Newsful/",
        tags: ["Python", "FastAPI", "MongoDB", "Gen AI", "Browser Extension"],
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
        tags: ["Python", "Streamlit", "LangChain.py", "Gen AI"],
        featured: true,
    },
    {
        title: "ChatSKCET",
        description: "Chatbot for SKCET",
        githubURL: "https://github.com/Siddhesh-Agarwal/ChatSKCET/",
        tags: ["LangChain.py", "TypeScript", "Next", "Gen AI"],
    },
    {
        title: "Dementia Detection",
        description: "Dementia Detection using CNN",
        githubURL: "https://github.com/Siddhesh-Agarwal/Dementia-Detection/",
        liveURL: "https://dementia-detection.streamlit.app/",
        tags: ["Python", "TensorFlow", "Streamlit", "CNN"],
        featured: true,
    },
    {
        title: "Neural Network in C",
        description: "Implementation of sigmoid and relu layer along with various types of regressions in plain C",
        githubURL: "https://github.com/Siddhesh-Agarwal/Neural-Network-in-C/",
        tags: ["C", "Deep Learning", "Maths"],
    },
    {
        title: "URL-2-Chroma",
        description: "A streamlit app to generate chroma DB locally",
        githubURL: "https://github.com/Siddhesh-Agarwal/URL-2-Chroma/",
        tags: ["Python", "Streamlit", "Chroma", "VectorDB", "Gen AI"],
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
        title: "Scientific Computing with Python",
        description: `Projects for FreeCodeCamp"s "Scientific Computing with Python" Certificate.`,
        githubURL: "https://github.com/Siddhesh-Agarwal/FreeCodeCamp-Python-Challenges/",
        tags: ["Python", "Scientific Computing", "FreeCodeCamp"],
    },
    {
        title: "Data Analysis with Python",
        description: `Projects for FreeCodeCamp"s "Data Analysis with Python" Certificate.`,
        githubURL: "https://github.com/Siddhesh-Agarwal/Data-Analysis-with-Python/",
        tags: ["Python", "Data Analysis", "FreeCodeCamp"],
    },
]

function ProjectCards({ projects }: { projects: ProjectData[] }) {
    // sort the projects by featured and then by title
    projects.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                projects.map(
                    (project: ProjectData, index: number) => (
                        <ProjectCard props={project} key={index} />
                    )
                )
            }
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <div className="container px-4 md:px-8 lg:px-12 min-w-full bg-white dark:bg-gray-900 py-6 md:pb-12">
            <h1 className="text-4xl font-bold text-center mb-6 semibold underline dark:text-gray-50">
                Projects
            </h1>

            <Tabs defaultValue="python" className="w-full">
                <TabsList className="w-full flex justify-center">
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="ai">AI/ML</TabsTrigger>
                    <TabsTrigger value="miscellaneous">Miscellaneous</TabsTrigger>
                </TabsList>

                {/* Python Projects */}
                <TabsContent value="python">
                    <ProjectCards projects={PythonProjects} />
                </TabsContent>

                {/* React Projects */}
                <TabsContent value="javascript">
                    <ProjectCards projects={JavaScriptProjects} />
                </TabsContent>

                {/* AI Projects */}
                <TabsContent value="ai">
                    <ProjectCards projects={AIProjects} />
                </TabsContent>

                {/* Miscellaneous Projects */}
                <TabsContent value="miscellaneous">
                    <ProjectCards projects={MiscellaneousProjects} />
                </TabsContent>
            </Tabs>
        </div>
    )
}
