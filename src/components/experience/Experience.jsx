import React from 'react'
import ExCar from './ExCar'
import './Experience.css'
import Sdata from './Sdata'

const Experience = () => {
  return (
    <section id='experiences'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
     
 {Sdata.map((val,index)=>{
   return(
      <ExCar
      title={val.title}
      title1={val.title1}
      title2={val.title2}
      title3={val.title3}
      title4={val.title4}
      title5={val.title5}
      />
   );
 })
}
 </div>
    </section>
    
  )
}

export default Experience