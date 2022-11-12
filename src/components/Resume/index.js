import React from 'react';
import { saveAs } from 'file-saver';

function Resume() {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get resume file
        fetch('/AngelVandeFeniksResume.pdf')
        // , {
        //     method: 'GET',
        //     headers: {
        //         'Content-type': 'application/pdf'
        //     },
        //     responseType: 'blob'
        // })
        .then((response) => {
            response.blob().then((blob) => {
                // Creating new object of resume file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AngelVandeFeniksResume.pdf';
                alink.click();
            })
        })
    }

    const onDownload = () => {
        saveAs('/AngelVandeFeniksResume.pdf', "AngelVandeFeniksResume.pdf");
    };

    return (
        <div className='div-resume'>
            <h2>Resume</h2>
            {/* <h6>Download my
                <button className='resume-btn' onClick={onDownload}>resume</button>.
            </h6> */}
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
                    GrapgQL
                </li>
                <li>
                    API
                </li>
            </ul>
        </div>
    );
}

export default Resume;