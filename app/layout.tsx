import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siddhesh Agarwal",
  description: "Portfolio of Siddhesh Agarwal",
  authors: {
    name: "Siddhesh Agarwal",
    url: "https://siddhesh.tech/"
  },
  twitter: {
    title: "Siddhesh Agarwal",
    description: "Portfolio of Siddhesh Agarwal",
    creator: "Siddhesh Agarwal",
    creatorId: "@Siddhesh0205",
    card: "summary_large_image",
    images: "https://github.com/Siddhesh-Agarwal.png",
  },
  openGraph: {
    title: "Siddhesh Agarwal",
    description: "Portfolio of Siddhesh Agarwal",
    countryName: "India",
    url: "https://siddhesh.tech",
    images: "https://github.com/Siddhesh-Agarwal.png",
  },
  keywords: ["Siddhesh", "Agarwal", "Portfolio", "Siddhesh Agarwal", "Siddhesh Agarwal Portfolio"],
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
