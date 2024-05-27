import React from 'react'
import "./header.css"
import Logo from "../img/logo.png"
import Email from "../img/email.png"
import { Link } from "react-router-dom"; 

function header() {
  return (
      <header class="header">
    <nav>
    <div class="logo">
          <a class="name_logo" href="index.html">Muneza.<span>Dixon</span></a>
        <Link to="/fire">  <img class="fireband-logo" src={ Logo} /></Link>
    </div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><Link to={"apps"}>Projects</Link></li>
      <li><Link to={"about"} href="#">About</Link></li>
      <li><Link to={"blog"}>Blog</Link></li>
      <li><a href={"connect"}>Connect</a></li>
    </ul>
  </nav>
</header>
  )
}
// #9f0009 reds 
export default header