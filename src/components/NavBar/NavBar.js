import React from 'react';
import './NavBar.css';
import logo from '../../assets/icons/logo.svg';
import CartWidget from '../CartWidget/CartWidget.js';
import LinksListContainer from '../LinksListContainer/LinksListContainer.js';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className="navbar">
        <Link to={`/`}><img src={logo} alt="" className="logo"/></Link>
        <LinksListContainer/>
        <CartWidget/>
      </nav>
  )
}

export default NavBar;