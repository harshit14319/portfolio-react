import React from 'react'
import CTA from './CTA'
import Me from '../../assests/hg.jpg'
import HeaderSocials from './HeaderSocials'
import './Header.css';
const Header = () => {
  return (
    <header>
   <div className='container header__ container'>
     <div className='mai'>
     <h5>Hello I'am</h5>
<h1>Harshit Gupta</h1>
<h5 className='text-light'>Front-End Developer</h5>
</div>
<CTA/>
<HeaderSocials/> 
<div className='me'>
  <img src={Me} alt='me'/>
</div>
<a href='#contact' className='scroll__down'>Scroll Down</a>
   </div>
   </header>
  )
}

export default Header