import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function textSize(size: string) {
  const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"]
  const index = sizes.indexOf(size)
  if( index === -1 ) {
    throw "Invalid text size"
  }
  return `text-${size} md:text-${sizes[index + 1]} lg:text-${sizes[index + 2]}`
}