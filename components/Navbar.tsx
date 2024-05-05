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
        <Button variant={"outline"} size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={"bg-inherit hover:bg-background px-4 py-2 text-lg"}>
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaSun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}

export default function Navbar() {
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