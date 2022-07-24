import React from 'react'
import h from '../../assests/_Resume.png'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={h} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
