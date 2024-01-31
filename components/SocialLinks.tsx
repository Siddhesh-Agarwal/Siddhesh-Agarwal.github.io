import {motion} from "framer-motion";
import {
    FaTwitter,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
import { SocialLink } from "@/types/SocialLink";

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
        <motion.div className="flex justify-center items-center mx-0 my-6">
            {Links.map((link, index) => (
                <motion.a
                    className="border text-black bg-green-100 flex h-10 w-10 text-xl justify-center items-center mx-2 my-0 rounded-[50%] border-solid border-green-400 hover:bg-green-200"
                    title={link.name}
                    href={link.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer noopener"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{duration: 0.2}}
                >
                    {link.icon}
                </motion.a>
            ))}
        </motion.div>
    )
}
