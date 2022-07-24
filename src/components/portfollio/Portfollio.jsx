import React from 'react'
import './Portfollio.css';
import Pdata from './Pdata';
import PortCard from './PortCard';

const Portfollio = () => {
  return (
    <section id='portfollio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
      {Pdata.map((val,index)=>{
   return(
      <PortCard
      img={val.img}
      title={val.title}
  link={val.link}
      />
   );
 })
}      

      </div>
    </section>
  )
}

export default Portfollio
