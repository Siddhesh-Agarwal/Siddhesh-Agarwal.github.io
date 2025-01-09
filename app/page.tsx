"use client";
import { Links } from "@/components/Links";
import { Intro } from "@/components/Intro";
import Navbar from "@/components/Navbar";

export default function HomePage() {
    return (
        <>
            <Navbar hide="home" />
            <main className="container-fluid p-0 min-h-screen w-full overflow-x-hidden">
                {/* Header - Fade in animation */}
                <section className="container-fluid min-h-screen w-scree grid place-items-center dark:bg-gray-900">
                    <Intro />
                </section>

                {/* Links - Fade in animation */}
                <section className="container-fluid md:h-screen w-screen bg-blue-700 dark:bg-blue-600 grid place-items-center">
                    <Links />
                </section>
            </main>
        </>
    )
}

