import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Button from './Button'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)  
        } 
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/leonhoccode" className="navbar-logo" onClick={closeMobileMenu}>
                        leonhoccode <i className="fab fa-typo3"></i>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        {/*Making hambuger menu*/}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/leonhoccode' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Product
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline' buttonState='true'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar