import React from 'react';
import './NavBar.css';
import logo from '../../assets/icons/logo.svg';
import CartWidget from '../CartWidget/CartWidget.js';
import LinksListContainer from '../LinksListContainer/LinksListContainer.js';

const NavBar = () => {
  return (
      <nav className="navbar">
        <a href="#">
          <img src={logo} alt="" className="logo"/>
        </a>
        <LinksListContainer/>
        <CartWidget/>
      </nav>
  )
}

export default NavBar;