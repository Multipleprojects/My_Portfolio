import React from 'react'
import { skills } from '../data/experince'
import './CSS.css'
const Skills = () => {
  return (
       <div className='mt-5 m-lg-4' id='skills'>
   <h1 className="">SKILLS</h1>
   <div className='row row-cols-2 justify-content-center mt-5' >
  {skills.map((skill, index) => {
    return (
      <div className='col text-center border  border-warning shadow-custom p-4 mt-4 rounded-3' 
      data-aos="flip-left" 
            data-aos-duration="1000">
        <img 
          src={skill.image} 
          height='150px' 
          width='150px' 
          className='rounded-circle border border-dark ' 
          alt={`Skill ${index}`} 
        />
        <h3 className='pt-2'>{skill.title}</h3>
      </div>
    );
  })}
</div>
</div>
  )
}

export default Skills
