import { motion } from "framer-motion";
import {
    FaDev,
    FaEnvelope,
    FaGithub,
    FaGlobe,
    FaLinkedin,
    FaProjectDiagram,
    FaTwitter,
} from "react-icons/fa";
import { SocialLink, SocialLinkExtended } from "../types/SocialLink";
import "./SocialLinks.css"


const LinksList: SocialLinkExtended[] = [
    {
        name: "Personal Website",
        link: "/",
        icon: <FaGlobe />,
        description: "My portfolio website",
    },
    {
        name: "Projects",
        link: "/projects",
        icon: <FaProjectDiagram />,
        description: "My projects",
    },
    {
        name: "Blogs",
        link: "https://dev.to/siddhesh_agarwal",
        icon: <FaDev />,
        description: "My technical blogs",
    },
    {
        name: "GitHub",
        link: "https://github.com/Siddhesh-Agarwal",
        icon: <FaGithub />,
        description: "My GitHub profile",
    },
]

const Links: SocialLink[] = [
    {
        name: "Twitter",
        link: "https://twitter.com/Siddhesh2503",
        icon: <FaTwitter />,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/siddhesh-agarwal/",
        icon: <FaLinkedin />,
    },
    {
        name: "Email",
        link: "mailto:siddhesh.agarwal@gmail.com",
        icon: <FaEnvelope />,
    },
]

export default function SocialLinks() {
    return (
        <div className="w-screen h-screen px-4 grid place-items-center bg">
            <div className="max-w-md w-full">
                <div className="grid place-items-center my-8">
                    <img
                        src="https://github.com/Siddhesh-Agarwal.png"
                        alt="Siddhesh Agarwal"
                        className="rounded-full w-48 h-48"
                    />
                    <h1 className="text-4xl font-semibold my-4">Siddhesh Agarwal</h1>
                </div>
                <div>
                    {LinksList.map((link: SocialLinkExtended) => (
                        <motion.a
                            href={link.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={link.name}
                            className="border-2 border-green-400 rounded-3xl flex my-3 px-5 py-2 shadow-sm hover:shadow-lg bg-green-300 bg-opacity-50"
                        >
                            <span className="mr-2 mt-1">
                                {link.icon}
                            </span>
                            <strong>{link.name}</strong>
                            <p className="desc">
                                : {link.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
            <div>
                <div className="max-w-md w-full inline-flex">
                    {Links.map((link: SocialLink) => (
                        <motion.a
                            href={link.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={link.name}
                            className="text-xl border-2 border-green-400 rounded-3xl flex p-2 shadow-sm hover:shadow-lg mx-3 bg-green-300 bg-opacity-50"
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    )
}
