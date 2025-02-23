import { useTheme } from "next-themes"
import { Button, buttonVariants } from "./ui/button"
import { useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa6"
import { cn } from "@/lib/utils"

export default function ModeToggle() {
    const { theme, setTheme, systemTheme } = useTheme()
    useEffect(() => {
        if (systemTheme) {
            setTheme(systemTheme)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [systemTheme])
    return (
        <div className="size-6 px-0 md:size-12">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <FaMoon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <FaSun className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    )
}
