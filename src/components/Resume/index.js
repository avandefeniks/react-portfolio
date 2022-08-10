import React from 'react';

function Resume() {


    return (
        <div className='div-resume'>
            <h2>Resume</h2>
            <h6>Download my resume</h6>
            <h4>Front-end Proficiencies</h4>
            <ul className='resume-list'>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Bootstrap
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    React.js
                </li>
            </ul>

            <h4>Back-end Proficiencies</h4>
            <ul className='resume-list'>
                <li>
                    Node.js
                </li>
                <li>
                    Express.js
                </li>
                <li>
                    SQL
                </li>
                <li>
                    MySQL
                </li>
                <li>
                    Sequelize
                </li>
                <li>
                    NoSQL | MongoDB | Mongoose
                </li>
                <li>
                    API
                </li>
            </ul>
        </div>
    );
}

export default Resume;