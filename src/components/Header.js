import React from 'react'
import './Header.css'

function Header({logo, menu}) {
  return (
    <header>
        <div className='logo'>
            <a href="/"> <img src={logo} alt="logo" /> </a>
        </div>

        <div className='nav-links'>
            <a href="">Cybertruck</a>
            <a href="/">Model S</a>
            <a href="/">Model 3</a>
            <a href="/">Model X</a>
            <a href="/">Model Y</a>
            {/*}<a href="/">Solar Roof</a>
            <a href="/">Solar Panel</a>
            {*/}
            <a href="/">Töltés</a>
        </div>

        <div className="nav-links-secondary">
            <a href="/">Támogatás</a>
            <a href="/">Fiók</a>
            <a href="/">Menü</a>
        </div>

        <div className='mobile-menu'>
            <img src={menu} alt="mobile-menu" />
        </div>
    </header>
  )
}

export default Header