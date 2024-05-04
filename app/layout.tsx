import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });
const url = new URL("https://siddhesh-tech.vercel.app/");

export const metadata: Metadata = {
  title: "Siddhesh Agarwal",
  description: "Portfolio of Siddhesh Agarwal",
  metadataBase: url,
  authors: {
    name: "Siddhesh Agarwal",
    url: url,
  },
  twitter: {
    title: "Siddhesh Agarwal",
    description: "Portfolio of Siddhesh Agarwal",
    creator: "Siddhesh Agarwal",
    creatorId: "@Siddhesh0205",
    card: "summary_large_image",
    images: "https://github.com/siddhesh-agarwal.png",
  },
  openGraph: {
    title: "Siddhesh Agarwal",
    description: "Portfolio of Siddhesh Agarwal",
    countryName: "India",
    url: url,
    images: "https://github.com/siddhesh-agarwal.png",
  },
  keywords: ["Siddhesh", "Siddhesh Agarwal", "Siddhesh Agarwal Portfolio"],
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
