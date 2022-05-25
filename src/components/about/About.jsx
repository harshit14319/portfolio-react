import React from 'react'
import './About.css'
import {FaAward} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";


import me from '../../assests/me.jpeg'
import Card from './Card'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>

      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me}  alt='About Image'/>
            </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
            <Card sym={<FaAward/>} title={'Experience'} brief={"No Experience"}/>
            <Card sym={<FiUser/>}title={'Projects'} brief={"10+ Completed"}/>
            <Card sym={<VscFolderLibrary/>}title={'Client'} brief={"No Clients yet"}/>
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Veniam quam quo itaque neque omnis excepturi ad incidunt. Molestiae minima earum nulla accusantium autem rerum molestias quisquam, necessitatibus, omnis mollitia eum!
          </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk </a>
            </div>
            </div>
        
      
      
    </section>
  )
}

export default About