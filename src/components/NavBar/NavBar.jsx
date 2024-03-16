import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to='/'><h1>mi E-commerce</h1></Link>
        <ul>
            <li><Link to='/productos/Remeras'>Remeras</Link></li>
            <li><Link to='/productos/Buzos'>Buzos</Link></li>
            <li><Link to='/productos/Zapatillas'>Zapatillas</Link></li>
        </ul>
        <i>Cart 0</i>
    </nav>
  )
}

export default NavBar;