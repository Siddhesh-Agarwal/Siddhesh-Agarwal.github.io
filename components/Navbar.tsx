"use client";

import { FaFlaskVial, FaGithub, FaHashnode, FaMoon, FaSun } from "react-icons/fa6";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";

function ModeToggle() {
    const { theme, setTheme, systemTheme } = useTheme()
    useEffect(() => {
        if (systemTheme) {
            setTheme(systemTheme)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [systemTheme])
    return (
        <Button size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-gray-100 dark:bg-gray-800 text-inherit">
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export const Navbar: React.FC = () => {
    return (
        <header className="bg-gray-100 dark:bg-gray-800 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-900">
            <div className="container mx-auto px-4 md:px-6 py-2 md:py-3">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row">
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
                    </div>
                    <div className="flex flex-row">
                        <Link href="https://github.com/Siddhesh-Agarwal" target="_blank"
                            className="px-2 py-1 md:mx-2 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                            <FaGithub className="text-lg inline-block" />
                        </Link>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

export function NewNavbar() {
    return (
        <NavigationMenu className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-50 shadow-sm dark:shadow-none border-b border-gray-200 dark:border-gray-900 justify-between">
            <NavigationMenuList className="flex flex-row">
                <NavigationMenuItem className="font-semibold">
                    <Link href={"/projects/"} prefetch={true} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaFlaskVial className="text-lg inline-block mr-2" />
                            Projects
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="font-semibold">
                    <Link href={"https://siddhesh2003.hashnode.dev/"} target="_blank" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaHashnode className="text-lg inline-block mr-2" />
                            Blogs
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="flex flex-row">
                <NavigationMenuItem className="font-semibold">
                    <Link href={"https://github.com/Siddhesh-Agarwal/"} target="_blank" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <FaGithub className="text-lg inline-block mr-2" />
                            Github
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}