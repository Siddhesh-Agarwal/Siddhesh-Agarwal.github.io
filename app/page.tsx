"use client";
import { Links } from "@/components/Links";
import { Intro } from "@/components/Intro";

export default function HomePage() {
    return (
        <main className="container-fluid p-0 min-h-screen w-full overflow-x-hidden">
            {/* Header - Fade in animation */}
            <section className="container-fluid h-screen w-scree grid place-items-center dark:bg-gray-900">
                <Intro />
            </section>

            {/* Links - Fade in animation */}
            <section className="container-fluid h-screen w-screen bg-blue-600 grid place-items-center">
                <Links />
            </section>
        </main>
    )
}

