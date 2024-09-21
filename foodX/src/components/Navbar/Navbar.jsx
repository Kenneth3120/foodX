import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("Menu");
  return (
    <div className='Navbar'>
      <Link to='/'><img src={assets.logo} alt='logo here' className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
            <div className='dot'></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
