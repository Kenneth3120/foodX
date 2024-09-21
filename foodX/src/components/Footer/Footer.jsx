import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
      <div className='footer-content-left'>
        <img src={assets.logo} alt='' />
        <p>All rights reserved @Kenneth</p>
        <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
        </div>
      </div>
      <div className='footer-content-center'>
        <h2>STREAKZY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footer-content-right'>
        <h2>Get In Touch</h2>
        <ul>
            <li>+91 822322322</li>
            <li>kennethrebello253@gmail.com</li>
        </ul>
      </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright @FoodX. All rights reserved</p>
    </div>
  )
}

export default Footer
