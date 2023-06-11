import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';
import {
    SiC,
    SiCplusplus,
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiLinux,
    SiMongodb,
    SiMysql,
    SiPython,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiAmazonaws,
    SiDocker,
    SiFirebase,
    SiHeroku,
    SiPhp
} from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';


function SocialLinks() {
    type SocialLink = {
        name: string,
        icon: JSX.Element,
        link: string,
    }

    const socialLinks: SocialLink[] = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="inline-block" />,
            link: "https://www.linkedin.com/in/siddhesh-agarwal"
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="inline-block" />,
            link: "https://www.twitter.com/siddhesh0205"
        },
        {
            name: "Email",
            icon: <FaEnvelope className="inline-block" />,
            link: "mailto:siddhesh.agarwal@gmail.com",
        },
    ]

    // Use Tailwind for styling purposes
    return (
        <div className="row-auto">
            <div className="col-span-12 flex flex-wrap justify-center">
                {
                    socialLinks.map((link, index) => {
                        return (
                            <motion.a
                                href={link.link}
                                rel="noreferrer noopener" target="_blank"
                                className="m-1 bg-blue-500 rounded px-2 py-1 text-white text-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                key={index}
                            >
                                {link.icon}
                                <p className="inline-block mx-2">
                                    {link.name}
                                </p>
                            </motion.a>
                        )
                    })
                }
            </div>
        </div>
    )
}


function Tools() {
    const links = [
        {
            name: "Python",
            icon: <SiPython />,
        },
        {
            name: "CSS",
            icon: <SiCss3 />,
        },
        {
            name: "HTML",
            icon: <SiHtml5 />,
        },
        {
            name: "JavaScript",
            icon: <SiJavascript />,
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
        },
        {
            name: "Express.js",
            icon: <SiExpress />,
        },
        {
            name: "React",
            icon: <SiReact />,
        },
        {
            name: "Node.js",
            icon: <SiNodedotjs />,
        },
        {
            name: "MySQL",
            icon: <SiMysql />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
        },
        {
            name: "PHP",
            icon: <SiPhp />,
        },
        {
            name: "C",
            icon: <SiC />,
        },
        {
            name: "C++",
            icon: <SiCplusplus />,
        },
        {
            name: "Docker",
            icon: <SiDocker />,
        },
        {
            name: "Git",
            icon: <SiGit />,
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
        },
        {
            name: "Linux",
            icon: <SiLinux />,
        },
        {
            name: "AWS",
            icon: <SiAmazonaws />,
        },
        {
            name: "Firebase",
            icon: <SiFirebase />,
        },
        {
            name: "Heroku",
            icon: <SiHeroku />,
        }
    ]
    return (
        <div className="inline-flex justify-center w-full flex-wrap px-4">
            {
                links.map(
                    (link, index) => {
                        return (
                            <motion.div
                                className="m-2 text-blue-500 font-semibold inline-block lg:text-4xl text-3xl"
                                style={{ width: "fit-content" }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                key={index}
                                title={link.name}
                            >
                                {link.icon}
                            </motion.div>
                        )
                    }
                )
            }
        </div>
    )
}


function Roles() {
    const delay = 1000;
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: delay / 1000 }}
            transition={{ delay: delay / 1000 }}
            className="text-4xl lg:text-6xl"
        >
            <Typewriter
                onInit={
                    (typewriter) => {
                        typewriter
                            .pauseFor(delay)
                            .typeString("I'm a <span class='text-blue-400'>Web Developer</span>")
                            .pauseFor(delay)
                            .deleteChars(13)
                            .pauseFor(delay / 4)
                            .typeString("<span class='text-blue-400'>Full Stack Developer</span>")
                            .pauseFor(delay)
                            .deleteChars(20)
                            .pauseFor(delay / 4)
                            .typeString("<span class='text-blue-400'>ML Engineer</span>")
                            .pauseFor(delay)
                            .deleteChars(11)
                            .pauseFor(delay / 4)
                            .typeString("<span class='text-blue-400'>Data Scientist</span>")
                            .pauseFor(delay)
                            .deleteChars(15)
                            .start();
                    }
                }
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 20,
                }}
            />
        </motion.span>
    )
}


export default function Intro() {
    return (
        <div className="container py-4 dark:text-white">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-6xl lg:text-8xl">Hello, I'm <span className="text-blue-500 font-bolder">Siddhesh</span></h1>
                    <h2 className="text-6xl"><Roles /></h2>
                </div>
            </div>
            {/* List things proficient in  */}
            <div className="row my-10">
                <div className="col-12 text-center">
                    <h3 className="text-3xl lg:text-4xl w-full">
                        <p className="mb-3">
                            I'm proficient in:
                        </p>
                        <Tools />
                    </h3>
                </div>
            </div>
            {/* Ways to contact me */}
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="text-3xl mb-3">You can contact me on:</h3>
                    <SocialLinks />
                </div>
            </div>
        </div>
    )
}
