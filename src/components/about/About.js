import React from 'react';
import { ELEMENTS } from '../../utils/Constants';
import './about.scss';
import Data from '../../Data';

const About = () => {  
    return (
        <section id={ELEMENTS.ABOUT} className={"about-section"}>
            <div className={"about-content-container"}>
                <p className={"about-description"}>{Data.about.description}</p>
                <div className={"about-text-container"}>
                    <h1 className={"about-text"}>This</h1>
                    <h1 className={"about-text"}>is who</h1>
                    <h1 className={"about-text"}>I am</h1>
                </div>
            </div>
        </section>
    );
}

export default About;