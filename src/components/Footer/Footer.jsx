import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
            <img className='footer-content-left-logo' src={assets.logo} alt="" />
            <p>Welcome to Zesty, your ultimate destination for a diverse range of delicious cuisines delivered right to your doorstep. Whether you crave comforting classics or adventurous new flavors, our curated menu ensures satisfaction with every bite. Order now and experience the zest in every meal!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9826284556</li>
                <li>contact@zesty.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 &copy; Zesty.com - All Rights Reserved. </p>
    </div>
  )
}

export default Footer
