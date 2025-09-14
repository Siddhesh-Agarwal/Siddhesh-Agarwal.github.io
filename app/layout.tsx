import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const font = JetBrains_Mono({ subsets: ["cyrillic"] });
const site_config = {
  url: "https://siddhesh.cc/",
  title: "Siddhesh's Portfolio",
  description: "Portfolio website of Siddhesh Agarwal",
  image: "/Siddhesh.png",
  author: "Siddhesh Agarwal",
  twitter_handle: "@Siddhesh0205",
};

export const metadata: Metadata = {
  title: site_config.title,
  description: site_config.description,
  metadataBase: new URL(site_config.url),
  authors: {
    name: site_config.author,
    url: site_config.url,
  },
  twitter: {
    title: site_config.title,
    description: site_config.description,
    creator: site_config.author,
    creatorId: site_config.twitter_handle,
    card: "summary_large_image",
    images: site_config.image,
  },
  openGraph: {
    siteName: site_config.title,
    title: site_config.title,
    description: site_config.description,
    url: site_config.url,
    images: site_config.image,
  },
  keywords: [
    "Siddhesh",
    "Siddhesh Agarwal",
    "Portfolio",
    "Tech",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Gen AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
