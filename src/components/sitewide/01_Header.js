import React from 'react'

import '../../styles/sitewide_styles/01_header.css'

import logoType from '../../assets/images/logotype.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <a className="navbar-brand" href="./index.html"><img src={logoType} alt="Crito Logotype" /></a>
        <button className="menu-bars"><i className=" fa-solid fa-bars-staggered"></i></button>
          <div className="menu">
            <div className="top-menu">
                <div className="contact-info">
                    <div className="content-box"><i className="fa-light fa-envelope-dot pe-2"></i>info@crito.com</div>
                    <div className="content-box"><i className="fa-light fa-phone-volume pe-2"></i>+46 (8) 121 470 50</div>
                    <div className="content-box last"><i className="fa-regular fa-location-dot pe-2"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
                </div>

                <div className="socialmedia">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook pe-2"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter pe-2"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram pe-2"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>

            <div className="mainmenu pt-2">
                <nav>
                    <a className="active" href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="news.html">News</a>
                    <a href="contacts.html">Contact</a>
                </nav>
              <a className="btn-ylw btn-login" href="login.html">Login<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header