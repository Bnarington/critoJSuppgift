import React from 'react'

const NavSection = () => {
  return (
    <div>
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
  )
}

export default NavSection