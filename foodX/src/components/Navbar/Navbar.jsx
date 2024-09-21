import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("Menu");
  return (
    <div className='Navbar'>
      <img src={assets.logo} alt='logo here' className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt='' />
            <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
