import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import "./NavBar.css";

export default function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton(); // Run on initial render
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton); // Cleanup on unmount
    }, []);

    return (
        <>
            <nav className='navBar'>
                <div className='container'>
                    <Link to='/' className='logo' onClick={closeMobileMenu}>
                        <img src='./images/logo.png' alt='logo' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/technology' className='nav-links' onClick={closeMobileMenu}>
                                Technologies
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyles='btn-outline'>Sign up</Button>}
                </div>
            </nav>
        </>
    );
}
