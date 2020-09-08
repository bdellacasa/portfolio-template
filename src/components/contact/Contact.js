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
        <p className={"contact-text"}>Get in touch!</p>
      </div>
      <div className={"contact-info-container"}>
        <a href={Data.contact.mail}><FiMail className={"contact-icon"} /></a>
        <a href={Data.contact.linkedin}><FaLinkedin className={"contact-icon"} /></a>
        <a href={Data.contact.github}><FaGithub className={"contact-icon"} /></a>
      </div>
    </section>
  );
}

export default Contact;