import { FaFlaskVial, FaGithub, FaHashnode } from "react-icons/fa6";
import Link from "next/link";

export const Navbar: React.FC = () => {
    return (
        <header className="bg-gray-100 dark:bg-gray-800 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-900">
            <div className="container mx-auto px-6 py-3">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link className="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="/#intro">
                                Siddhesh Agarwal
                            </Link>
                        </div>
                    </div>
                    {/* Toggle display for mobile */}
                    <nav className="flex flex-row justify-end w-1/2 pt-0">
                        <Link href="https://blog.siddhesh.tech/" target="_blank"
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaHashnode className="text-lg inline-block" />
                            <p className="hidden md:inline-block md:ml-2">
                                Blogs
                            </p>
                        </Link>
                        <Link href="/projects/" prefetch={true}
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaFlaskVial className="text-lg inline-block" />
                            <p className="hidden md:inline-block md:ml-2">
                                Projects
                            </p>
                        </Link>
                        <Link href="https://github.com/Siddhesh-Agarwal" target="_blank"
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaGithub className="text-lg inline-block" />
                            <p className="hidden md:inline-block md:ml-2">
                                Github
                            </p>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
