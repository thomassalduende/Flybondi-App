import React from 'react'
import logo from '../assets/logo-05.png'

import '../App.css'
const Header = () => {
  return (
    <nav className="navbar text-center">
      <img  className='logo' src={logo} alt="" />
    </nav>
  )
}

export default Header