export type SocialLinkExtended = {
    name: string,
    icon: JSX.Element,
    link: string,
    description: string
}

export type SocialLink = Omit<SocialLinkExtended, 'description'>;
