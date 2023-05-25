import React from 'react';

export default function Navbar() {
    // create a Navbar using bootstrap
    // It contains 3 links: Intro, Links, Projects
    // The links should be in a row
    return (
        <div className="container-fluid border-bottom shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand navbar-light bg-light">
                        <div className="container-fluid">
                            <ul className="navbar-nav me-auto mb-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#intro">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#links">Links</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/projects/">Projects</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
