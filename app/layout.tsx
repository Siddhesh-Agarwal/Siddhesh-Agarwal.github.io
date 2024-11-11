import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });
const site_url = new URL("https://siddhesh-tech.vercel.app/");
const site_title = "Siddhesh's Portfolio";
const site_description = "Portfolio of Siddhesh Agarwal";
const site_image = "https://github.com/siddhesh-agarwal.png";
const site_author = "Siddhesh Agarwal";

export const metadata: Metadata = {
  title: site_title,
  description: site_description,
  metadataBase: site_url,
  authors: {
    name: site_author,
    url: site_url
  },
  twitter: {
    title: site_title,
    description: site_description,
    creator: site_author,
    creatorId: "@Siddhesh0205",
    card: "summary_large_image",
    images: site_image
  },
  openGraph: {
    siteName: site_title,
    title: site_title,
    description: site_description,
    url: site_url,
    images: site_image,
  },
  keywords: ["Siddhesh", "Siddhesh Agarwal", "Siddhesh Agarwal Portfolio", "Siddhesh Portfolio"],
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
      <body className={`${inter.className} dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
