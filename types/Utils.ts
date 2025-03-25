import { IconType } from "react-icons/lib"

type CustomDate = {
    year: number
    month: number
}

type LinkInfo = {
    name: string
    url: string
}

type ToolLink = {
    name: string,
    icon: IconType
}

type SocialLink = {
    name: string
    icon: IconType,
    link: string
}

type Project = {
    name: string
    desc: string
    links: [LinkInfo, ...LinkInfo[]] // Ensures at least one link and unique names
    tags: string[]
    date: CustomDate
}

type ExperienceDetail = {
    startDate: CustomDate
    endDate: CustomDate | "Current"
    company: string
    position: string
    desc?: string
    location: string | "remote"
}

export type { CustomDate, LinkInfo, ToolLink, SocialLink, Project, ExperienceDetail }