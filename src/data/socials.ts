import type { SocialLink } from "@/types";
import { SiGithub, SiGmail, SiHashnode, SiLinkedin } from "react-icons/si";
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: SiGithub,
    link: "https://www.github.com/siddhesh-agarwal/",
  },
  {
    name: "Gmail",
    icon: SiGmail,
    link: "mailto:siddhesh.agarwal@gmail.com",
  },
  {
    name: "Hashnode",
    icon: SiHashnode,
    link: "https://siddhesh2003.hashnode.dev/",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/siddhesh-agarwal/",
  },
];
