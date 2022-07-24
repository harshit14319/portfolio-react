import React from "react";
const PortCard=(props)=>{
    return(
    <>
    <article className='portfolio__item'>
    <div className="portfolio__item-image">
      <img src={props.img} alt=''/>
      <h3>{props.title}</h3>
      <a href={props.link} className='btn'>Visit</a>
    </div>
  </article>
  </>
    )
}
export default PortCard;
