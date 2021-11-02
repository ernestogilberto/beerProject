import React from 'react';
import './NavBar.css';
import logo from '../../assets/icons/logo.svg';
import CartWidget from '../CartWidget/CartWidget.js';
import ItemsListContainer from '../ItemsListContainer/ItemsListContainer.js';

function NavBar() {
    return (
        <nav className="navbar">
            <a href="#">
                <img src={logo} alt="" className="logo"/>
            </a>
            <ItemsListContainer/>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;