import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className="top-menu">
            <div className="contact-info">
                <div className="content-box"><i className="fa-light fa-envelope-dot pe-2"></i>info@crito.com</div>
                <div className="content-box"><i className="fa-light fa-phone-volume pe-2"></i>+46 (8) 121 470 50</div>
                <div className="content-box last"><i className="fa-regular fa-location-dot pe-2"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
            </div>
            <div className="socialmedia">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook pe-2"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter pe-2"></i></a>
                <a href="https://instagram.com" target="_blank"> <i className="fa-brands fa-instagram pe-2"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
  )
}

export default NavBar