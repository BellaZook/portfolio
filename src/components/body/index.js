import React from 'react';
import AboutMe from './AboutMe';
import Experience from './experience';
import Skills from './skills';
import WebDeveloper from './WebDeveloper';

const AppBody = () => {
    return (
        <div className="container">
            <WebDeveloper />
            <Experience />
            <Skills />
            <AboutMe />
        </div>
    );
}

export default AppBody;