import {
    SiApachespark,
    SiAmazonaws,
    SiBootstrap,
    SiC,
    SiCloudflare,
    SiCplusplus,
    SiDjango,
    SiDocker,
    SiExpress,
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
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPowershell,
    SiPython,
    SiReact,
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
} from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialLink } from "@/types/SocialLink";
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
    { name: "Scikit Learn", icon: SiScikitlearn },
    { name: "TensorFlow", icon: SiTensorflow },
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
    { name: "AWS", icon: SiAmazonaws },
    { name: "Cloudflare", icon: SiCloudflare },
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


export const Intro: React.FC = () => {
    return (
        <div className="container py-4 dark:text-white max-w-6xl">
            <div className="my-5">
                <div className="text-center">
                    <h1 className={`${textSize("4xl")} inline`}>
                        Hello, I&apos;m{' '}<span className="text-blue-600 dark:text-blue-500 font-semibold underline">Siddhesh</span> <Image src={HelloImage} alt="Hello" className="inline-block w-12 h-12" />
                    </h1>
                </div>
            </div>

            {/* Divide into 2 parts */}
            <div className="grid grid-cols-1 gap-6">
                <div className="my-5">
                    <p className="text-justify">
                        Hello! I&apos;m <b>Siddhesh Agarwal</b>, a <b>passionate software engineering student</b> with a focus on <b>developing efficient, scalable solutions</b>. I have been programming for the past 5 years, since I was 16 yo. Currently, I&apos;m working on honing my skills in <b>Golang</b> and <b>React Native</b>.
                    </p>
                </div>
                <div className="my-5 place-items-center">
                    <Image src={profilePic} alt="Siddhesh Agarwal" className="w-full max-w-2xl h-auto rounded-md shadow-lg" />
                    <div className="text-center text-muted-foreground">
                        Me according to GPT-4o and Dall-e
                    </div>
                </div>
            </div>

            {/* List things proficient in  */}
            <div className="my-5">
                <div className="text-center">
                    <h3 className={`${textSize("2xl")} mb-3`}>
                        I&apos;m proficient in:
                    </h3>
                    <div className="inline-flex justify-center w-full md:max-w-xl lg:max-w-3xl flex-wrap px-4">
                        {
                            links.map(
                                (link: ToolLink, index: number) => {
                                    return (
                                        <motion.div
                                            className={`m-2 text-blue-600 dark:text-blue-500 font-semibold inline-block ${textSize("xl")} w-fit cursor-pointer`}
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
                </div>
            </div>

            {/* Ways to contact me */}
            <div className="my-5">
                <div className="text-center">
                    <h3 className={`${textSize("2xl")} mb-3`}>You can contact me on:</h3>
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
                </div>
            </div>
        </div>
    )
}
