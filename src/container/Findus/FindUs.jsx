import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contacts'>
   <div className='app__wrapper_info'>
    <SubHeading title='Contact'/>
    <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
    <div className='app__wrapper_content'>
      <p className='p__opensans'>Unit No. R18, Third Floor, City Centre - Al Zahia - Sharjah - United Arab Emirates</p>
      <p className='p__cormorant' style={{color: '#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
      <p className='p__opensans'>Mon - Fri: 10:00 a.m - 02:00 a.m</p>
      <p className='p__opensans'>Sat - Sun: 10:00 a.m - 03:00 a.m</p>
      <button className='custom__button' style={{marginTop:"2rem"}}>Visit Us</button>
    </div>
   </div>

   <div className='app__wrapper_img'>
    <img src={images.welcome} alt='findus'/>
   </div>
  </div>
);

export default FindUs;
