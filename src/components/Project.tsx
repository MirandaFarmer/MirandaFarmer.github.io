import React from "react";
// import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
/* import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png'; */
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/MirandaFarmer/AQA" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MirandaFarmer/AQA" target="_blank" rel="noreferrer"><h2>AQA (Application Quick Access)</h2></a>
                <p><p>This application which does not require installation to run on the Windows OS. It is designed to make finding sites and applications easy while opening certain applications with pre-set parameters.</p></p>
            </div>
            {/*<div className="project">
                <a href="https://github.com/MirandaFarmer/AQA" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MirandaFarmer/AQA" target="_blank" rel="noreferrer"><h2>AQA (Application Quick Access)</h2></a>
                <p>This application which does not require installation to run on the Windows OS. It is designed to make finding sites and applications easy while opening certain applications with pre-set parameters.</p>
            </div>*/}
        </div>
    </div>
    );
}

export default Project;