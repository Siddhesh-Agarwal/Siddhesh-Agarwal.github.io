import {
    SiApachespark,
    SiAmazonaws,
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
    SiGnubash,
    SiGo,
    SiJavascript,
    SiLaravel,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiNeo4J,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPowershell,
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
} from "react-icons/si";
import { motion } from "framer-motion";
import { ToolLink } from "@/types/ToolLink";
import Image from "next/image";
import profilePic from "@/public/me-according-to-chatgpt.webp"
import { textSize } from "@/lib/utils";
import HelloImage from "@/assets/hello.svg"

const links: ToolLink[] = [
    { name: "Python", icon: SiPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Flask", icon: SiFlask },
    { name: "Django", icon: SiDjango },
    { name: "SciPy", icon: SiScipy },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Scikit Learn", icon: SiScikitlearn },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Streamlit", icon: SiStreamlit },
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "ShadCN UI", icon: SiShadcnui },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Deno", icon: SiDeno },
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "Go", icon: SiGo },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Neo4j", icon: SiNeo4J },
    { name: "Redis", icon: SiRedis },
    { name: "Apache Spark", icon: SiApachespark },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Linux", icon: SiLinux },
    { name: "GNU Bash", icon: SiGnubash },
    { name: "Powershell", icon: SiPowershell },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: SiAmazonaws },
    { name: "Cloudflare", icon: SiCloudflare },
    { name: "Vercel", icon: SiVercel },
];

export const Intro: React.FC = () => {
    return (
        <section className="container py-4 dark:text-white max-w-6xl text-center">
            <div className="my-5">
                <div className="text-center">
                    <h1 className={`${textSize("4xl")} inline text-center`}>
                        Hello, I&apos;m{' '}<span className="text-blue-600 dark:text-blue-500 font-semibold underline">Siddhesh</span> <Image src={HelloImage} alt="Hello" className="inline-block w-12 h-12" />
                    </h1>
                </div>
            </div>

            {/* Divide into 2 parts */}
            <div className="grid grid-cols-1 gap-6 py-6">
                <div className="mb-5">
                    <p className="text-left md:text-justify">
                        My name is <strong>Siddhesh Agarwal</strong>, I am a <strong>Computer Science student</strong> and a <strong>Hobbyist Developer</strong> with a keen interest in <strong>Backend Development</strong> and <strong>DevOps</strong>. I have been programming for the past {new Date().getFullYear() - 2019} years, since I was 16 yo. Currently, I&apos;m working on honing my skills in <strong>Golang</strong> and <strong>React Native</strong>. I am also learning <strong>Machine Learning</strong> and <strong>Deep Learning</strong> to build AI-powered applications.
                    </p>
                </div>
                <div className="place-items-center">
                    <Image src={profilePic} alt="Siddhesh Agarwal" className="w-full max-w-2xl h-auto rounded-md shadow-lg mx-auto" />
                    <div className="text-center text-muted-foreground">
                        Me according to GPT-4o and Dall-e
                    </div>
                </div>
            </div>

            {/* List things proficient in  */}
            <div className="inline-flex justify-center w-full md:max-w-2xl lg:max-w-4xl flex-wrap px-4">
                {
                    links.map(
                        (linkObj: ToolLink, index: number) => {
                            return (
                                <motion.div
                                    className="m-2 text-blue-600 dark:text-blue-500 font-semibold inline-block text-2xl w-fit cursor-pointer"
                                    whileHover={{ scale: 1.25 }}
                                    whileTap={{ scale: 0.8 }}
                                    key={index}
                                    title={linkObj.name}
                                >
                                    <linkObj.icon className="inline-block" />
                                </motion.div>
                            )
                        }
                    )
                }
            </div>
        </section>
    )
}
