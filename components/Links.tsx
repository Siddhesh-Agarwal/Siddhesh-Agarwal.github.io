import {
    FaLinkedinIn,
    FaGithub,
    FaKaggle,
    FaDev,
    FaTwitter,
    FaHackerrank,
    FaCloudDownloadAlt
} from 'react-icons/fa';
import {
    SiHashnode,
    SiLeetcode,
    SiStackoverflow,
    SiHackerearth,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { SocialLink } from '@/types/SocialLink';
import Link from 'next/link';

const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/siddhesh-agarwal/"
    },
    {
        name: "Github",
        icon: <FaGithub />,
        link: "https://www.github.com/siddhesh-agarwal/"
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        link: "https://www.twitter.com/siddhesh0205/"
    },
    {
        name: "Kaggle",
        icon: <FaKaggle />,
        link: "https://www.kaggle.com/siddheshagarwal/"
    },
    {
        name: "Dev.to",
        icon: <FaDev />,
        link: "https://www.dev.to/siddhesh_agarwal/"
    },
    {
        name: "Hackerrank",
        icon: <FaHackerrank />,
        link: "https://www.hackerrank.com/Siddhesh_Agarwal/"
    },
    {
        name: "Hashnode",
        icon: <SiHashnode />,
        link: "https://siddhesh2003.hashnode.dev/"
    },
    {
        name: "Leetcode",
        icon: <SiLeetcode />,
        link: "https://leetcode.com/Siddhesh-Agarwal/"
    },
    {
        name: "Stackoverflow",
        icon: <SiStackoverflow />,
        link: "https://stackoverflow.com/users/14257886/siddhesh-agarwal/"
    },
    {
        name: "Hackerearth",
        icon: <SiHackerearth />,
        link: "https://www.hackerearth.com/@siddhesh.agarwal/"
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

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <motion.div className="bg-white py-5 px-3 md:px-8 md:rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-white"
            style={{ maxWidth: "48rem", minHeight: "16rem" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className="row">
                <div className="col-12">
                    <h1 className="text-3xl text-center">
                        Siddhesh Agarwal
                    </h1>
                    <h2 className="text-xl text-center mt-2 dark:text-gray-200">
                        CSE Student
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
                                (link, index) => {
                                    return (
                                        <Link
                                            href={link.link}
                                            rel="noreferrer noopener" target="_blank"
                                            key={index}
                                            passHref
                                        >
                                            <motion.div
                                                className="m-2 p-2 rounded-2xl border-2 shadow-sm bg-white text-lg dark:bg-gray-800 dark:text-white dark:border"
                                                variants={item}
                                                title={link.name}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                {link.icon}
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
                <motion.a href="/Siddhesh_Agarwal-Resume.pdf" download
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow hover:shadow-lg text-xl"
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
