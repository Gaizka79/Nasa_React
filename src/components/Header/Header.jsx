import React from "react";
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import Nav from './Nav';

function Header () {
  return (
    <header className="header">
      <img src={logo} alt="logo NASA" className="headerImg" />
      <Nav/>
      <img src={logo2} alt="logo NASA" className="headerImg" />
    </header>
  )
}

export default Header;
