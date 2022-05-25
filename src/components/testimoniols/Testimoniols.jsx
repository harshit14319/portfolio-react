import React from 'react'
import Tdata from './Tdata'
import './Testimoniols.css'
import TestCard from './TestCard'
const Testimoniols = () => {
  return (
    <section id='testimoniols'>
      {/* <div className="testm"> */}
      <h5>Review from Classmates</h5>
      <h2>Testimonials</h2>
      {Tdata.map((val,index)=>{
   return(
      <TestCard
      img={val.img}
      name={val.name}
      text={val.text}
      />
   );
 })
}    

    </section>
  )
}

export default Testimoniols