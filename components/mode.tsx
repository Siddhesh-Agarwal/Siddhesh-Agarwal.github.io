"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <FaMoon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 size-3 md:size-4" />
      <FaSun className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 size-3 md:size-4" />
    </Button>
  );
}
