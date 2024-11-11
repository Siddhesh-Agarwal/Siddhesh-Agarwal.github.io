import {
    SiApachespark,
    SiBootstrap,
    SiC,
    SiCplusplus,
    SiDjango,
    SiDocker,
    SiFastapi,
    SiFlask,
    SiGit,
    SiGithub,
    SiGnubash,
    SiGmail,
    SiJavascript,
    SiLaravel,
    SiLinkedin,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPostgresql,
    SiPowershell,
    SiPython,
    SiPytorch,
    SiRedis,
    SiScikitlearn,
    SiScipy,
    SiShadcnui,
    SiStreamlit,
    SiTailwindcss,
    SiTensorflow,
    SiTwitter,
    SiTypescript,
    SiVercel,
    SiExpress,
    SiNodedotjs,
    SiReact,
} from "react-icons/si";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialLink } from "@/types/SocialLink";
import { ToolLink } from "@/types/ToolLink";
import Image from "next/image";
import profilePic from "@/public/me-according-to-chatgpt.webp"

const links: ToolLink[] = [
    { name: "Python", icon: SiPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Flask", icon: SiFlask },
    { name: "Django", icon: SiDjango },
    { name: "SciPy", icon: SiScipy },
    { name: "Scikit Learn", icon: SiScikitlearn },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },
    { name: "Apache Spark", icon: SiApachespark },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "ShadCN UI", icon: SiShadcnui },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Linux", icon: SiLinux },
    { name: "GNU Bash", icon: SiGnubash },
    { name: "Powershell", icon: SiPowershell },
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
];

const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        icon: SiLinkedin,
        link: "https://www.linkedin.com/in/siddhesh-agarwal/"
    },
    {
        name: "Twitter",
        icon: SiTwitter,
        link: "https://www.twitter.com/siddhesh0205/"
    },
    {
        name: "Email",
        icon: SiGmail,
        link: "mailto:siddhesh.agarwal@gmail.com",
    },
]

function SocialLinks() {
    return (
        <div className="row-auto">
            <div className="col-span-12 flex flex-wrap justify-center">
                {
                    socialLinks.map((link, index) => {
                        return (
                            <Link
                                href={link.link}
                                key={index}
                                rel="noreferrer noopener" target="_blank"
                                passHref
                            >
                                <motion.div
                                    className="m-1 bg-blue-600 dark:bg-blue-500 rounded px-2 py-1 text-white text-md md:text-lg lg:text-xl w-fit cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <link.icon className="inline-block" />
                                    <p className="inline-block mx-2">
                                        {link.name}
                                    </p>
                                </motion.div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}


function Tools() {
    return (
        <div className="inline-flex justify-center w-full md:max-w-xl lg:max-w-3xl flex-wrap px-4">
            {
                links.map(
                    (link: ToolLink, index: number) => {
                        return (
                            <motion.div
                                className="m-2 text-blue-600 dark:text-blue-500 font-semibold inline-block text-md md:text-lg lg:text-xl w-fit cursor-pointer"
                                whileHover={{ scale: 1.25 }}
                                whileTap={{ scale: 0.8 }}
                                key={index}
                                title={link.name}
                            >
                                <link.icon className="inline-block" />
                            </motion.div>
                        )
                    }
                )
            }
        </div>
    )
}


function Roles() {
    const DELAY = 1500;
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: DELAY / 1000 }}
            transition={{ delay: DELAY / 1000 }}
            className="text-blue-600 dark:text-blue-500 inline-flex text-center justify-center"
        >
            <Typewriter
                onInit={
                    (typewriter) => {
                        typewriter
                            .typeString("Full Stack Developer")
                            .pauseFor(DELAY)
                            .deleteAll()
                            .pauseFor(DELAY / 4)
                            .typeString("ML Engineer")
                            .pauseFor(DELAY)
                            .deleteAll()
                            .pauseFor(DELAY / 4)
                            .start()
                    }
                }
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 20,
                    deleteSpeed: 10,
                    cursor: "_",
                }}
            />
        </motion.span>
    )
}


export const Intro: React.FC = () => {
    return (
        <div className="container py-4 dark:text-white max-w-4xl">
            {/* <div className="my-5">
                <div className="col-12 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal">Hello, I&apos;m <span className="text-blue-600 dark:text-blue-500 font-bolder">Siddhesh</span></h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans">
                        <Roles />
                    </h2>
                </div>
            </div> */}

            {/* Divide into 2 parts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="my-5">
                    <p className="text-justify">
                        Hello! I am <b>Siddhesh Agarwal</b>, a passionate software engineering student with a focus on <b>algorithm optimization, problem-solving, and code efficiency</b>. My journey is marked by <b>hands-on experience</b> with complex coding problems, where I enjoy tackling time complexity challenges and finding creative ways to maximize performance. As I apply for SDE internships, I am excited to bring my drive for continuous improvement, deep understanding of coding fundamentals, and passion for technology to real-world projects that make an impact.
                    </p>
                </div>
                <div className="my-5">
                    <Image src={profilePic} alt="Siddhesh Agarwal" className="w-full"/>
                    <div className="text-center text-muted-foreground">
                        Me according to GPT-4o <code className="font-mono">UwU</code>
                    </div>
                </div>
            </div>

            {/* List things proficient in  */}
            <div className="my-5">
                <div className="text-center">
                    <h3 className="text-lg md:text-xl lg:text-2xl mb-3">
                        I&apos;m proficient in:
                    </h3>
                    <Tools />
                </div>
            </div>

            {/* Ways to contact me */}
            <div className="my-5">
                <div className="col-12 text-center">
                    <h3 className="text-lg md:text-xl lg:text-2xl mb-3">You can contact me on:</h3>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}
