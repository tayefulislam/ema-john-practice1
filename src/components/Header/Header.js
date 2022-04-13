import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav className='header'>
                <img src={logo} alt="" />

                <div>
                    <a href="/">Shop</a>
                    <a href="/">Order</a>
                    <a href="/">Invertory</a>
                    <a href="/">Manage</a>
                </div>

            </nav>


        </div>
    );
};

export default Header;