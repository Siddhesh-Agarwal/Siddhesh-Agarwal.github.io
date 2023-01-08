import React from "react";
import Navbar from "./components/Navbar.tsx";
import Intro from "./components/Intro.tsx";
import Links from "./components/Links.tsx";
import Projects from "./components/Projects.tsx";

function App() {
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <div className="container-fluid p-0">
                {/* Header */}
                <section className="container min-vh-100" id="intro">
                    <Intro />
                </section>

                {/* Links */}
                <section className="container-fluid vh-100 bg-primary d-grid align-content-center justify-content-center" id="links">
                    <Links />
                </section>

                {/* Projects */}
                <section className="container min-vh-100" id="projects">
                    <Projects />
                </section>
            </div>
        </div>
    );
}

export default App;
