import React, { useRef, useEffect } from 'react';
import profile from '../assets/profile.webp';
import resume from '../pdf/mern.pdf';
import './CSS.css';
import Typed from 'typed.js';

const Home = () => {
  const typeref = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Muhammad Bhatti",
        "I am a web developer (MERN Stack)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    
    const typed = new Typed(typeref.current, { ...options });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='container mt-5' id='home'>
      <div className='row justify-content-center align-items-center  '>
        <div className='col-md-6 text-center fw-semibold fs-1  shadow-custom rounded-3 p-4 order-1 order-lg-0'
         data-aos="fade-up-right" data-aos-duration="1000">
          <div ref={typeref} className='text-white'></div>
          <a href={resume} download="Resume.pdf">
            <button className='p-3 fs-4 rounded mt-4 resume text-warning border-warning'>
              Download Resume
            </button>
          </a>
        </div>
        <div className='col-md-6 d-flex justify-content-center order-0 order-lg-1'    data-aos="fade-up-left" 
            data-aos-duration="1000">
          <img 
            src={profile} 
            height='300px' 
            width='300px' 
            className='rounded-circle img' 
            alt='Muhammad Mudassir profile' 
         
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
