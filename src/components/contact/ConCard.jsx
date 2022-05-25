import React from "react";
import './Contact.css'
const ConCard=(props)=>{
    return(
<>

<article className="contact__option">
<div className="contact__option-icon">
{props.icon}
</div>
    <h5>{props.title}</h5>
    <h6>{props.text}</h6>
    <a href={props.li} target="_blank">{props.mess}</a>
</article>

</>
    )
};
export default ConCard;