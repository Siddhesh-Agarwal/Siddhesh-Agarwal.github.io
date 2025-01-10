import {
    FaCloudDownloadAlt
} from "react-icons/fa";
import {
    SiDevdotto,
    SiGithub,
    SiGmail,
    SiHackerearth,
    SiHackerrank,
    SiHashnode,
    SiKaggle,
    SiLeetcode,
    SiLinkedin,
    SiStackoverflow,
    SiX,
} from "react-icons/si";
import { motion } from "framer-motion";
import { SocialLink } from "@/types/SocialLink";
import Link from "next/link";
import HyperText from "./ui/hyper-text";

const socialLinks: SocialLink[] = [
    {
        name: "Dev.to",
        icon: SiDevdotto,
        link: "https://www.dev.to/siddhesh_agarwal/"
    },
    {
        name: "GitHub",
        icon: SiGithub,
        link: "https://www.github.com/siddhesh-agarwal/"
    },
    {
        name: "Gmail",
        icon: SiGmail,
        link: "mailto:siddhesh.agarwal@gmail.com"
    },
    {
        name: "HackerEarth",
        icon: SiHackerearth,
        link: "https://www.hackerearth.com/@siddhesh.agarwal/"
    },
    {
        name: "HackerRank",
        icon: SiHackerrank,
        link: "https://www.hackerrank.com/Siddhesh_Agarwal/"
    },
    {
        name: "Hashnode",
        icon: SiHashnode,
        link: "https://siddhesh2003.hashnode.dev/"
    },
    {
        name: "Kaggle",
        icon: SiKaggle,
        link: "https://www.kaggle.com/siddheshagarwal/"
    },
    {
        name: "Leetcode",
        icon: SiLeetcode,
        link: "https://leetcode.com/Siddhesh-Agarwal/"
    },
    {
        name: "LinkedIn",
        icon: SiLinkedin,
        link: "https://www.linkedin.com/in/siddhesh-agarwal/"
    },
    {
        name: "StackOverflow",
        icon: SiStackoverflow,
        link: "https://stackoverflow.com/users/14257886/"
    },
    {
        name: "X",
        icon: SiX,
        link: "https://x.com/siddhesh0205/"
    },
]

export const Links: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <motion.div
            className="bg-white py-12 md:py-5 px-3 md:px-8 md:rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-white"
            style={{ maxWidth: "48rem", minHeight: "16rem" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className="row">
                <div className="col-12">
                    <HyperText className="text-3xl text-center font-bold">
                        Siddhesh Agarwal
                    </HyperText>
                    <h2 className="text-lg md:text-xl text-center mt-2 font-semibold dark:text-gray-200">
                        Just a Chill Guy
                    </h2>
                </div>
                {/* Animation to display social links one by one */}
                <motion.div
                    className="text-center my-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <div className="inline-flex flex-wrap justify-center">
                        {
                            socialLinks.map(
                                (linkObj, index) => {
                                    return (
                                        <Link
                                            href={linkObj.link}
                                            rel="noreferrer noopener" target="_blank"
                                            key={index}
                                            title={linkObj.name}
                                            passHref
                                        >
                                            <motion.div
                                                className="m-2 p-2 rounded-2xl border border-black dark:border-gray-100 shadow-sm bg-white text-lg dark:bg-gray-800 dark:text-white"
                                                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <linkObj.icon />
                                            </motion.div>
                                        </Link>
                                    )
                                }
                            )
                        }
                    </div>
                </motion.div>
            </div>
            {/* Button to Download resume */}
            <div className="text-center mt-5">
                <motion.a href="/Siddhesh_Resume.pdf" download
                    className="bg-green-600 dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg text-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaCloudDownloadAlt className="inline-block" />
                    <p className="inline-block ml-2">
                        Download Resume
                    </p>
                </motion.a>
            </div>
        </motion.div>
    )
}
