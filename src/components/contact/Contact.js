import React from 'react';
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Data from '../../Data';
import { ELEMENTS } from '../../utils/Constants';
import './contact.scss';

const Contact = () => {
    return (
        <section id={ELEMENTS.CONTACT} className={"contact-section"}>
            <div className={"contact-text-container"}>
                <h1 className={"contact-text"}>Get in touch!</h1>
            </div>
            <div className={"contact-info-container"}>
                <FiMail className={"contact-icon"}/>
                <p className={"contact-info-text"}>{Data.contact.mail}</p>
                <FaLinkedin className={"contact-icon"}/>
                <p className={"contact-info-text"}>{Data.contact.linkedin}</p>
                <FaGithub className={"contact-icon"}/>
                <p className={"contact-info-text"}>{Data.contact.github}</p>
            </div>
        </section>
    );
}

export default Contact;