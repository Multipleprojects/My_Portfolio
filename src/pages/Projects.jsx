import React from 'react';
import { projects } from '../data/experince';  // adjust the path accordingly

const Projects = () => {
  return (
    <div className='mt-5 m-lg-4' id='projects'>
   <h1 className="">PROJECTS</h1>  
      <div className="row d-flex justify-content-center mt-5" >
        {projects.map((project, index) => (
          <div 
          data-aos="flip-right" 
            data-aos-duration="1000"
          className="col-md-4 mb-4 d-flex align-items-stretch mt-4 justify-content-center "  key={index}>
            <div className="card h-100 rounded border border-warning shadow-custom p-3 text-white" style={{ width: '18rem', background:'#021739' }}>
              <img src={project.image} className="card-img-top border border-warning " height='150px' width='300px' alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-warning mt-auto" target="_blank" rel="noopener noreferrer">
                  Go to Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
