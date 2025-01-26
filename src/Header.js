import React from 'react';
import {  Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <div className='name'>
                    <p>Daniel</p>
                </div>
                <div className='information'>
                    <ul>
                        <li>
                        <Link to="/">Heim</Link>
                        </li>
                        <li>
                            <Link to="/about">Om meg</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <Link to ="/contact">Kontakt meg</Link>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;