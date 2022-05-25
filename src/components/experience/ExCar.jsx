import React from "react";
const ExpCar=(props)=>{
    return(
        <>
           <article className="experience__details">
           <div className="experience__content">
<h2 >{props.title}</h2>
</div>

<div className="experience__content">
<h4>{props.title1}</h4>
</div>

<div className="experience__content">
<h4>{props.title2}</h4>
</div>

<div className="experience__content">
<h4>{props.title3}</h4>
</div>

<div className="experience__content">
<h4>{props.title4}</h4>
</div>

<div className="experience__content">
<h4>{props.title5}</h4>
</div>

              </article>
        </>
    )
}
export default ExpCar;