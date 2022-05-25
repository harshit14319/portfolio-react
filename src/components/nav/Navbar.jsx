import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiTwotoneBook} from 'react-icons/ai'
import { TiContacts} from "react-icons/ti";
import { BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import './Navbar.css';
const Navbar = () => {
  const[activeNav,setActiveNav] = useState('#');
  return (
    <>
    <div className='nav'>
    <a href='#'onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href='#about'onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''} ><AiOutlineUser/></a>
    <a href='#experiences' onClick={()=>setActiveNav('#experiences')} className={activeNav==='#experiences' ? 'active' : ''}><BiBook/></a>
    <a href='#portfollio' onClick={()=>setActiveNav('#portfollio')} className={activeNav==='#portfollio' ? 'active' : ''}><RiServiceLine/></a>
    <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><TiContacts/></a>
    </div>
</>
  );
};
export default Navbar;