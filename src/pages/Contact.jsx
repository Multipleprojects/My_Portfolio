import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='mt-5 m-lg-4 ' id='contact'>
      <h1>CONTACT</h1>
      <div className="container mb-5 mt-5" 
      data-aos="zoom-in-up" 
            data-aos-duration="1000"
      >
        <div className="row justify-content-center">
          <div className="col-auto">
            <a href='https://www.linkedin.com/in/-mern-stack-developer-101344292/'>
            <div  className="rounded-circle  border border-warning d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <FaLinkedin className="text-warning" style={{ fontSize: '40px' }} />
            </div>
            </a>
          </div>
          <div className="col-auto">
            <a href='https://github.com/Multipleprojects?tab=repositories'>
            <div className="rounded-circle  border border-warning d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <FaGithub className="text-warning" style={{ fontSize: '40px' }} />
            </div>
            </a>
</div>
            <div className="col-auto">
              <a 
              href='https://www.facebook.com/profile.php?id=61563844558032'>
            <div className="rounded-circle  border border-warning d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <FaFacebook className="text-warning" style={{ fontSize: '40px' }} />
            </div>
            </a>
          </div>
          <div className="col-auto">
            <a href='https://www.instagram.com/mudassirdeveloper92/' >
            <div className="rounded-circle  border border-warning d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <FaInstagram className="text-warning" style={{ fontSize: '40px' }} />
            </div>
            </a>
          </div>
          <div className="col-auto">
            <a href='https://x.com/Mudassirdev92'>
            <div className="rounded-circle  border border-warning d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
              <FaTwitter className="text-warning" style={{ fontSize: '40px' }} />
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
