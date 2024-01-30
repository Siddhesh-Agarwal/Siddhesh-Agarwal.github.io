import {
    FaDev,
    FaGithub,
    FaGlobe,
    FaProjectDiagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

type link = {
    name: string;
    url: string;
    icon: JSX.Element;
    description: string;
}

const Links: link[] = [
    {
        name: "Personal Website",
        url: "https://siddhesh.tech/",
        icon: <FaGlobe />,
        description: "My portfolio website",
    },
    {
        name: "GitHub",
        url: "https://github.com/Siddhesh-Agarwal",
        icon: <FaGithub />,
        description: "My open source contributions",
    },
    {
        name: "Blogs",
        url: "https://dev.to/siddhesh_agarwal",
        icon: <FaDev />,
        description: "My technical blogs",
    },
    {
        name: "Projects",
        url: "https://siddhesh.tech/projects/",
        icon: <FaProjectDiagram />,
        description: "My projects",
    }
]

export default function LinksList() {
    return (
        <motion.div className="mt-6 mx-4 md:mx-10 lg:mx-24">
            {Links.map((link) => (
                <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full max-w-[720px] flex mx-auto border text-black bg-green-100 text-xl no-underline mb-4 px-4 py-3 rounded-xl border-solid border-green-400 hover:bg-green-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    key={link.name}
                >
                    <span className="mr-3 inline-flex">
                        {link.icon}
                    </span>
                    <span className="font-semibold inline-flex">
                        {link.name}
                    </span>
                    <p className="hidden md:inline-flex">
                        : {link.description}
                    </p>
                </motion.a>
            ))}
        </motion.div>
    )
}
