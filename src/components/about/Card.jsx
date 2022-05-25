import React from "react";
import './About.css'
const Card =(props)=>{
    return(
<>
        <article className="about__card">
        <div className=" about__icons">{props.sym} </div>
        <h5>{props.title}</h5>
        <small>{props.brief}</small>
        </article>
</>
    );
};
export default Card;