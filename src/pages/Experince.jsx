import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { experince } from '../data/experince'
const Experince = () => {
  return (
    <div className='mt-5' id='experience'>
   <h1>EXPERIENCE</h1>
<div className='custom-margin' >
      {
        experince.map((item, index) => {
          return (
            <div key={index}
            data-aos="zoom-in" 
            data-aos-duration="1000"
            className=' border  border-warning d-flex flex-column flex-lg-row align-items-center shadow-custom  mt-5 rounded-3 p-1 p-lg-4 pt-4 pt-lg-0 justify-content-center gap-5'>
      
      <img src={item.Logo} className='rounded-circle ' height='150px' width='150px' />
      <div className='p-4'>
              <div className='d-flex justify-content-between'>
           <h2>{item.company}</h2>
      <div className='d-flex  gap-3'>    
           <p>{item.duration}</p>
           <p>{item.Location}</p>
</div>
</div>
           <p>{item.role}</p>
           <p>{item.description}</p>
</div>
              </div>
          )
      }
        )}
    </div>
    </div>
  )
}

export default Experince
