import React from 'react';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import Copyrights from './Copyrights';
import './Footer.css';




const Footer = () => (
  <div className='app__footer section__padding'>
  <FooterOverlay/>
  <Newsletter/>

  <div className='app__footer-links'>
    <div className='app__footer-links_contact'>
      <h1 className='app__footer-headtext'>Contact Us</h1>
      <p className='p__opensans'>Top Floor -89D - City Centre - Al Zahia - Sharjah - U.A.E</p>
      <p className='p__opensans'>+971 323-456-789</p>
      <p className='p__opensans'>+971 323-456-789</p>
    </div>  
    <div className='app__footer-links_logo'>
      <img src={images.lunarsi} alt='footer_logo' />
      <p className='p__opensans'>You are Divine.</p>
      <img src={images.spoon} alt='spoon' className='spoon-img' style={{marginTop:15}} />
      <div className='app__footer-links_icons'>
        <FiFacebook/>
        <FiTwitter/>
        <FiInstagram/>
      </div>
    </div>
    <div className='app__footer-links_work'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
      <p className='p__opensans'>Monday-Friday</p>
      <p className='p__opensans'>10:00 a.m-2:00 a.m</p>
      <p className='p__opensans'>Saturday-Sunday</p>
      <p className='p__opensans'>10:00 a.m-03:00 a.m</p>
    </div>   
  </div>
  <div className='footer__copyright'>
    <p className='p__opensans'><Copyrights/></p>
  </div>
  </div>
);

export default Footer;
