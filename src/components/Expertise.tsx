import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faRedhat, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Linux",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "Postman"
];

const labelsSecond = [
    "RHEL",
    "Linux",
    "Azure",
    "Python",
    "Pandas",
    "SQLalchemy",
];

const labelsThird = [
    "OpenAI",
    "Virtual Machines",
    "Oracle",
    "Cost Management",
    "Backup and Recovery",
    "Cloud",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Web Application Development</h3>
                    <p>.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRedhat} size="3x"/>
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Linux VM</h3>
                    <p>Experienced using Red Hat Enterprise Linux to manage Python automation and Oracle Database.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Microsoft Azure Environments</h3>
                    <p>I have professional experience using Azure to update legacy systems</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;