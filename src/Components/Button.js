import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn-medium', 'btn-large'];

const Button = (
    {

        children,
        type,
        onClick,
        buttonStyles,
        buttonSize

    }
) => {

    const checkButtonStyle = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>

                {children}

            </button>
        </Link>
    )
}

export default Button