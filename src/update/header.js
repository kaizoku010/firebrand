import React from 'react'
import "./header.css"
import Logo from "../img/logo.png"
import Email from "../img/email.png"
import { Link } from "react-router-dom"; 

function header() {

  const handleMenuClick = () => {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
      menuToggle.checked = false; // Uncheck the checkbox to close the menu
    }
  };
  return (
      <header class="header">
    <nav>
    <div class="logo">
          <a class="name_logo" href="index.html">Muneza.<span>Dixon</span></a>
        <Link to="/">  <img class="fireband-logo" src={ Logo} /></Link>
    </div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><Link onClick={handleMenuClick} to={"apps"}>Projects</Link></li>
      <li><Link onClick={handleMenuClick} to={"about"} href="#">About</Link></li>
      <li><Link onClick={handleMenuClick} to={"blog"}>Blog</Link></li>
      <li><Link onClick={handleMenuClick} to={"connect"}>Connect</Link></li>
    </ul>
  </nav>
</header>
  )
}
// #9f0009 reds 
export default header