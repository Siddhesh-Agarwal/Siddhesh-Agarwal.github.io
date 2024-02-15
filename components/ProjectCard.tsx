import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ProjectData } from '@/types/ProjectData'
import Link from 'next/link'

export default function ProjectCard({ key, props }: { key: number, props: ProjectData }) {
    // Use TailwindCSS to style the project card
    return (
        <motion.div
            className="flex-row flex-wrap justify-center shadow-md dark:shadow-none rounded-lg overflow-hidden border border-gray-200 dark:border-gray-900 hover:shadow-xl dark:hover:shadow-none min-h-72"
            key={key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >

            {/* Space between Both divs */}
            <div className='pb-3 md:pb-6 h-full flex flex-col justify-around dark:bg-gray-800/50 relative'>
                <div className='inline-block'>
                    {
                        props?.featured &&
                        <span className="bg-emerald-500 text-white px-3 py-1 tracking-widest absolute text-sm right-0 top-0 rounded-bl uppercase">
                            <FaStar className="inline-block mr-1 mb-1" />
                            Favourite
                        </span>
                    }
                    {/* Image */}
                    {
                        props.image &&
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={props.image}
                            alt={props.title}
                            loading="lazy"
                            className="w-full h-48 object-cover"
                        />
                    }
                    {/* Title */}
                    <div className="px-3 py-4">
                        <h1 className="text-gray-900 dark:text-gray-100 font-semibold underline text-2xl tracking-wide">{props.title}</h1>
                    </div>

                    {/* Tags */}
                    <div className="px-3 flex flex-wrap">
                        {
                            props.tags.map(
                                (tag, index) => (
                                    <span key={index} className="bg-blue-400 text-white rounded-lg text-sm my-1 mr-2 py-1 px-2">{tag}</span>
                                )
                            )
                        }
                    </div>

                    {/* Description */}
                    <p className="px-3 flex flex-wrap mt-4 text-gray-700 dark:text-gray-300">
                        {props.description}
                    </p>
                </div>

                {/* Links */}
                <div className="px-3 w-full flex flex-wrap mt-4 justify-start gap-2">
                    {
                        props.githubURL &&
                        <Link href={props.githubURL} rel="noreferrer noopener" target="_blank" passHref>
                            <motion.a
                                className="bg-gray-900 hover:bg-black text-white rounded mr-1 py-1 px-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="inline-block mr-1" /> GitHub
                            </motion.a>
                        </Link>
                    }
                    {
                        props.liveURL &&
                        <Link href={props.liveURL} rel="noreferrer noopener" target="_blank" passHref>
                            <motion.a
                                className="bg-green-600 hover:bg-green-700 text-white rounded ml-1 py-1 px-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGlobe className="inline-block mr-1" /> Live
                            </motion.a>
                        </Link>
                    }
                </div>
            </div>
        </motion.div>
    )
}

