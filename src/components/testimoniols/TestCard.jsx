import React from "react";
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const TestCard=(props)=>{
    return(
        <>
              <Swiper className="container testimonials__container">

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
          <img src={props.img} alt='Avatar'/>
          </div>
          <h5 className='cliet__name'>{props.name}</h5>
          <small className='client__review'>
          {props.text}
          </small>
        </SwiperSlide>
        </Swiper>
        </>
    );
};
export default TestCard;