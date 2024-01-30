import { motion } from "framer-motion";
import { Links } from "../components/Links";
import { Intro } from "../components/Intro";
import { Navbar } from "../components/Navbar";

export default function HomePage() {
    return (
        <motion.div className="container-fluid p-0 min-w-screen overflow-x-hidden">
            <Navbar />
            <motion.div className="container-fluid p-0">
                {/* Header - Fade in animation */}
                <motion.section
                    className="container-fluid h-screen w-screen dark:bg-gray-900 grid place-items-center"
                    id="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Intro />
                </motion.section>

                {/* Links - Fade in animation */}
                <motion.section
                    className="container-fluid h-screen w-screen bg-blue-600 grid place-items-center"
                    id="links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Links />
                </motion.section>
            </motion.div>
        </motion.div>
    )
}
