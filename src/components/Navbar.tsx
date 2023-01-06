import React from 'react';

function Navbar() {
    // create a Navbar using bootstrap
    // It contains 3 links: Intro, Links, Projects
    // The links should be in a row
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand navbar-light bg-light">
                        <div className="container-fluid">
                            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                                <ul className="navbar-nav me-auto mb-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#intro">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#links">Links</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#projects">Projects</a>
                                    </li>
                                </ul>
                            {/* </div> */}
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar;
