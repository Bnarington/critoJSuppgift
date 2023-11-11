import React from 'react'
import NavBar from './NavBar'
import NavSection from './NavSection'

import logoType from '../assets/images/logotype.svg'

const Header = () => {
  return (
    <header>
        <a className="navbar-brand" href="./index.html"><img src={logoType} alt="Crito Logotype" /></a>
        <button className="menu-bars"><i className=" fa-solid fa-bars-staggered"></i></button>

        <NavBar />
        <NavSection />

    </header>
  )
}

export default Header