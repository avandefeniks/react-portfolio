import React, { useState, useEffect } from "react";

function Header({setpage}) {
    
    function activeNav(e, page) {
        // console.log(e.target);
        var link = document.querySelectorAll('.navActive');
        for ( let i = 0; i < link.length; i++) {
            link[i].classList.toggle('navActive')
        }
        e.target.classList.add('navActive');
        setpage(page)
    }

    return (
        <header className="d-flex flex-row justify-content-around">
        <h1>
            <a href="/">Angel Van de Feniks</a>
        </h1>
            <nav>
                <ul className="d-flex flex-row">
                    <li onClick={(e) => activeNav(e, 'about')}>About Me</li>
                    <li onClick={(e) => activeNav(e, 'projects')}>Portfolio</li>
                    <li onClick={(e) => activeNav(e, 'contact')}>Contact</li>
                    <li onClick={(e) => activeNav(e, 'resume')}>Resume</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;