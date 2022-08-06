import React from "react";

function Nav() {

    return (
        <header className="d-flex flex-row justify-content-around">
        <h1>
            <a href="/">Angel Van de Feniks</a>
        </h1>
            <nav>
                <ul className="d-flex flex-row">
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;