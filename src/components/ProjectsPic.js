import React from 'react';
import './ProjectsStl.css';
import background from "./moreImages/projects.jpg";

export default function Projects() {
  return ( 
    <div style={{ backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'fill'
    }}>
  <h1 className='projects'>PROJECTS
  </h1>
    </div>
  );
}