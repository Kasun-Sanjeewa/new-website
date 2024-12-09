import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {

    const [click, setclick] = useState(false);


    const handleClick = () => {
        setclick(!click)
    }
    //Hii

    return (
        <>
            <nav className='navBar'>
                <div className='container'>
                    <Link to='/' className='logo'>
                        <img src='./images/logo.png' alt='logo' />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>

                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                </div>

            </nav>
        </>
    )
}
