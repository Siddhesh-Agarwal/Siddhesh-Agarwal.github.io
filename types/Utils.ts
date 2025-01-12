import { IconType } from "react-icons/lib"

export type CustomDate = {
    year: number
    month: number
}

export type LinkInfo = {
    name: string
    url: string
}

export type ToolLink = {
    name: string,
    icon: IconType
}

export type SocialLink = {
    name: string
    icon: IconType,
    link: string
}

export type Project = {
    name: string
    desc: string
    links: [LinkInfo, ...LinkInfo[]] // Ensures at least one link and unique names
    tags: string[]
    date: CustomDate
}

export type ExperienceDetail = {
    startDate: CustomDate
    endDate: CustomDate
    company: string
    position: string
    desc?: string
    location: string | "remote"
}

