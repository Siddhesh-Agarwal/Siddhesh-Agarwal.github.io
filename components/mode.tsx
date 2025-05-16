"use client";

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"

export default function ModeToggle() {
    const { theme, setTheme, systemTheme } = useTheme()
    useEffect(() => {
        if (systemTheme) {
            setTheme(systemTheme)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [systemTheme])
    return (
        <div>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <FaMoon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 size-3 md:size-4" />
                <FaSun className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 size-3 md:size-4" />
            </Button>
        </div>
    )
}
