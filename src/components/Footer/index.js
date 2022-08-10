import React from 'react';

function Footer() {

    return (
        <div className='div-contact-me footer'>
            <nav>
                <ul className="d-flex flex-row justify-content-around contact-list">
                    <li>
                        831-531-8387
                    </li>
                    <li>
                        <a href="mailto:angelj.vandefeniks@gmail.com">
                            angelj.vandefeniks@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://github.com/avandefeniks">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/angel-van-de-feniks-90916613/">Linkedin</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;