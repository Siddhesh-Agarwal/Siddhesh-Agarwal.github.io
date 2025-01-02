import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const font = JetBrains_Mono({subsets: ["cyrillic"]});
const site_config = {
  url: new URL("https://siddhesh-tech.vercel.app/"),
  title: "Siddhesh's Portfolio",
  description: "Portfolio of Siddhesh Agarwal",
  image: "https://github.com/siddhesh-agarwal.png",
  author: "Siddhesh Agarwal",
  twitter_handle: "@Siddhesh0205",
}

export const metadata: Metadata = {
  title: site_config.title,
  description: site_config.description,
  metadataBase: site_config.url,
  authors: {
    name: site_config.author,
    url: site_config.url
  },
  twitter: {
    title: site_config.title,
    description: site_config.description,
    creator: site_config.author,
    creatorId: site_config.twitter_handle,
    card: "summary_large_image",
    images: site_config.image
  },
  openGraph: {
    siteName: site_config.title,
    title: site_config.title,
    description: site_config.description,
    url: site_config.url,
    images: site_config.image,
  },
  keywords: [
    "Siddhesh Agarwal",
    "Siddhesh's Portfolio",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Python" ,
    "FastAPI",
    "Gen AI",
    "Tech Portfolio",
    "Software Development",
    "Coding Portfolio",
    "Software Engineering Student",
    "Tech Projects"
  ],
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${font.className} dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
