import React from 'react';
import './ServicesStl.css';
import background from "./moreImages/services.jpg";

export default function Services() {
  return ( 
    <div style={{ backgroundImage: `url(${background})`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
    }}>
  <h1 className='services'>SERVICES
  </h1>
    </div>
  );
}