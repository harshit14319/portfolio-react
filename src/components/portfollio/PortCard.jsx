import React from "react";
const PortCard=(props)=>{
    return(
    <>
    <article className='portfolio__item'>
    <div className="portfolio__item-image">
      <img src={props.img} alt='' onClick={props.link}/>
      <h3>{props.title}</h3>
      <a href='https://github.com' className='btn'>Github</a>
    </div>
  </article>
  </>
    )
}
export default PortCard;
