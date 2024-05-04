import { FaFlaskVial, FaGithub, FaHashnode } from "react-icons/fa6";
import Link from "next/link";

export const Navbar: React.FC = () => {
    return (
        <header className="bg-gray-100 dark:bg-gray-800 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-900">
            <div className="container mx-auto px-4 md:px-6 py-2 md:py-3">
                <div className="flex flex-row justify-around md:justify-end items-center">
                    <nav className="flex flex-row justify-end">
                        <Link href="/projects/" prefetch={true}
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaFlaskVial className="text-lg inline-block" />
                            <p className="inline-block ml-2">
                                Projects
                            </p>
                        </Link>
                        <Link href="https://siddhesh2003.hashnode.dev/" target="_blank"
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaHashnode className="text-lg inline-block" />
                            <p className="inline-block ml-2">
                                Blogs
                            </p>
                        </Link>
                        <Link href="https://github.com/Siddhesh-Agarwal" target="_blank"
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaGithub className="text-lg inline-block" />
                            <p className="inline-block ml-2">
                                Github
                            </p>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
