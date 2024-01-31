import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siddhesh Agarwal",
  description: "Portfolio of Siddhesh Agarwal",
  metadataBase: new URL('https://siddhesh.tech/'),
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
    images: "/profile.jpeg",
  },
  openGraph: {
    title: "Siddhesh Agarwal",
    description: "Portfolio of Siddhesh Agarwal",
    countryName: "India",
    url: "https://siddhesh.tech",
    images: "/profile.jpeg",
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
      <head>
          <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
