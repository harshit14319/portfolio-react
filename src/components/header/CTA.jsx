import React from 'react'
import h from '../../assests/h.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={h} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA