import React from "react";
import Navbar from "./components/Navbar.tsx";
import Intro from "./components/Intro.tsx";
import Links from "./components/Links.tsx";
import Projects from "./components/Projects.tsx";
import { motion } from "framer-motion";


function App() {
    return (
        <motion.div className="container-fluid p-0">
            <Navbar />
            <motion.div className="container-fluid p-0">
                {/* Header - Fade in animation */}
                <motion.section
                    className="container min-vh-100" id="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Intro />
                </motion.section>

                {/* Links - Fade in animation */}
                <motion.section
                    className="container-fluid vh-100 bg-primary d-grid align-content-center justify-content-center" id="links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Links />
                </motion.section>
            </motion.div>
        </motion.div>
    );
}

export default App;
