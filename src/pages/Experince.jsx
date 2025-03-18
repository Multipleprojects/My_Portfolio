import React from 'react';
import { Helmet } from 'react-helmet';
import { experince } from '../data/experince';

const Experience = () => {
  return (
    <div className='mt-5' id='experience'>
      <Helmet>
        <title>Experience - Mudassir Portfolio</title>
        <meta name="description" content="Explore Mudassir's professional experience as a MERN stack developer, working with technologies like React, Node.js, and more." />
      </Helmet>
      <h1>EXPERIENCE</h1>
      <div className='custom-margin'>
        {experince.map((item, index) => (
          <div key={index} data-aos="zoom-in" data-aos-duration="1000" className='border border-warning d-flex flex-column flex-lg-row align-items-center shadow-custom mt-5 rounded-3 p-1 p-lg-4 pt-4 pt-lg-0 justify-content-center gap-5'>
            <img src={item.Logo} className='rounded-circle' height='150px' width='150px' alt={`${item.company} logo`} />
            <div className='p-4'>
              <div className='d-flex justify-content-between'>
                <h2>{item.company}</h2>
                <div className='d-flex gap-3'>    
                  <p>{item.duration}</p>
                  <p>{item.Location}</p>
                </div>
              </div>
              <p>{item.role}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
