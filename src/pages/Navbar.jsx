import React, { useState } from 'react';
import './CSS.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(true);

  return (
    <div className='d-flex flex-column flex-lg-row justify-content-between p-4 fs-5 fw-bold' data-aos="fade-down" data-aos-duration="1000">
      <div className='d-flex justify-content-between w-100'>
        <p className='pt-2'>Portfolio</p>

        {/* Hamburger Menu for smaller screens */}
        <div style={{ cursor: 'pointer' }} className='d-block d-lg-none'>
          {MenuOpen ? (
            <FaBars onClick={() => setMenuOpen(!MenuOpen)} />
          ) : (
            <FaTimes onClick={() => setMenuOpen(!MenuOpen)} />
          )}
        </div>
      </div>

      {/* Menu Items */}
      <div className={` ${MenuOpen ? 'd-none d-lg-flex' : 'd-flex'} gap-4 flex-column flex-lg-row align-items-center align-items-lg-start`}>
        <a href='#home' style={{ textDecoration: 'none', color: 'white' }}>
          <p className='navbar'>Home</p>
        </a>
        <a href='#experience' style={{ textDecoration: 'none', color: 'white' }}>
          <p className='navbar'>Experience</p>
        </a>
        <a href='#skills' style={{ textDecoration: 'none', color: 'white' }}>
          <p className='navbar'>Skills</p>
        </a>
        <a href='#projects' style={{ textDecoration: 'none', color: 'white' }}>
          <p className='navbar'>Projects</p>
        </a>
        <a href='#contact' style={{ textDecoration: 'none', color: 'white' }}>
          <p className='navbar'>Contacts</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
