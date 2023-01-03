import React from 'react';

function Navbar() {
    // Create 
    return (
        <nav 
            className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-2"
            style={{backgroundColor: "#e3e2fd"}}
        >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fs-6" href="#intro">Intro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-6" href="#links">Links</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-6" href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
