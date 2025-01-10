import { CustomDate, LinkInfo } from "./Utils"

export type Project = {
    name: string
    desc: string
    links: [LinkInfo, ...LinkInfo[]] // Ensures at least one link and unique names
    tags: string[]
    date: CustomDate
}