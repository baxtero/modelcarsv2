//Navbar.js
import React, { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showLogin = ()=> {
    document.getElementById("login-signup").classList.remove("hide");
    var divs = document.querySelectorAll('.signup-form');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add('hide');
    }
  }

  const showSignUp = () =>{
    document.getElementById("login-signup").classList.remove("hide");
    var divs = document.querySelectorAll('.signup-form');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove('hide');
    }
  }

  return (
    <div id="nav" className="header scrolled navbar">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <div className="menu-icon">
              <img src="img/close.png"></img>
          </div>
        ) : (
          <div className="menu-icon">
              <img src="img/menu.png"></img>
          </div>
        )}
      </div>
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
          <img src="/img/logo.png"></img>
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">About Us</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Contact Us</a>
          </li>
        
          <li className="option mobile-option" onClick={showLogin}>
            <a href="#">Login</a>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <a href="" className="sign-up">
            Sign Up
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={showLogin}>
          <a href="#">Login </a>
        </li>
        <li className="signup-btn" onClick={showSignUp}>
          <a href="#">
            Sign Up
          </a>
        </li>
      </ul>
      
      <ul>    
      <li className="my-cart" onClick={closeMobileMenu}>
            <a href="" >
            Cart(0)
            </a>
          </li>
      </ul>
      
    </div>
  );
};

export default Header;

/*
import React from 'react';

const Navbar=() => {
  return (
    <header className="scrolled navbar" >

        <div className="logo">
            <img src="/img/logo.png"></img>
        </div>
        <nav className="navigation">
            {<div><span>hi</span>
            <span>hi</span>
            <span>hi</span>
            <span>hi</span></div>}
        </nav>

    </header>
  )
};
export default Navbar; */