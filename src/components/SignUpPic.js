import React from 'react';
import './SignUp.css';
import background from "./moreImages/login.jpg";

export default function SignUp() {
  return ( 
    <div style={{ backgroundImage: `url(${background})`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
    }}>
  <h1 className='sign-up'>LIKE & SUBSCRIBE
  </h1>
    </div>
  );
}
