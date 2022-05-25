import React from "react";
import './Contact.css'
import ConCard from "./ConCard";
import Cdata from "./Cdata";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact=()=>{
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5vp4frj', 'template_h1r6y4v', form.current, 'XB0KYlKTX5aHlfGjW')
e.target.reset()
      };
const Subm=()=>{
alert("Message Sent Sucessfully");
}
    return(
        <>

        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
            <div className="contact__options">
            {Cdata.map((val,index)=>{
   return(
      <ConCard
      icon={val.icon}
      title={val.title}
      text={val.text}
      li={val.li}
      mess={val.mess}
      />
   );
 })
}     
</div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
<button type="submit" className="btn btn-primary" onClick={Subm}>Send Message</button>
                </form>
            </div>
        </section>
        </>
    );
};
export default Contact;
