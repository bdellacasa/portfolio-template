import React, { useState, useEffect } from 'react';
import {
    Navbar,
    NavLink,
    NavbarToggler,
    Nav,
    Collapse
  } from 'reactstrap';

import { ELEMENTS } from '../../utils/Constants';

import './header.scss';

const styles =
    {
        container: {
            display: 'flex', 
            position: 'fixed', 
            width: '100vw'
        },
        options: {
            fontSize: '1.2em', 
            color: 'white',
            flexDirection: 'column',
            paddingLeft: '50px',
            textDecoration: 'none',
            alignSelf: 'center'
        },
    }

const Header = () => {
    const [headerClass, setHeaderClass] = useState("header-container")
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
   
    const handleScroll = () => {
        setTimeout(()=> {
            if (window.scrollY > window.innerHeight * 0.16) {
                setHeaderClass("header-active")
            } else {
                setHeaderClass("header-container")
            }
        }, 200)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <Navbar className={headerClass} light expand="md" style={styles.container}>
            <NavbarToggler style={{ backgroundColor: 'white' }} onClick={toggle} />
            <Collapse className={"header-menu"} isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavLink href={`#${ELEMENTS.HOME}`} style={styles.options}>Home</NavLink>
                    <NavLink href={`#${ELEMENTS.ABOUT}`} style={styles.options}>About</NavLink>
                    <NavLink href={`#${ELEMENTS.EXPERIENCE}`} style={styles.options}>Experience</NavLink> 
                    <NavLink href={`#${ELEMENTS.PORTFOLIO}`}style={styles.options}>Portfolio</NavLink>
                    <NavLink href={`#${ELEMENTS.CONTACT}`} style={styles.options}>Contact</NavLink>
                </Nav>
            </Collapse>  
        </Navbar>
    );
}

export default Header;