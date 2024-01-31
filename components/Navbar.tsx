import React from "react";
import { HiMenu } from "react-icons/hi";
import { FaDev, FaGithub } from "react-icons/fa";
import Link from "next/link";

export const Navbar: React.FC = () => {
    // Toggle menu for mobile
    const [display, setDisplay] = React.useState<boolean>(false);
    function toggleDisplay() {
        setDisplay(!display);
    }
    return (
        <header className="bg-white shadow-sm dark:bg-gray-800">
            <div className="container mx-auto px-6 py-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link className="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#intro">
                                Siddhesh Agarwal
                            </Link>
                        </div>
                        <div className="flex md:hidden">
                            <button type="button" aria-label="toggle menu" onClick={toggleDisplay}
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300">
                                <HiMenu />
                            </button>
                        </div>
                    </div>
                    {/* Toggle display for mobile */}
                    <nav className={`${display ? "flex" : "hidden"} md:flex flex-col md:flex-row md:justify-end w-1/2 pt-4 md:pt-0`}>
                        <Link href="https://blog.siddhesh.tech/" target="_blank"
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaDev className="hidden text-lg md:inline-block" />
                            <p className="inline-block md:hidden">
                                dev.to
                            </p>
                        </Link>
                        <Link href="/projects/" prefetch={true}
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            Projects
                        </Link>
                        <Link href="https://github.com/Siddhesh-Agarwal" target="_blank">
                            <FaGithub className="hidden text-lg md:inline-block" />
                            <p className="inline-block md:hidden">
                                Github
                            </p>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
