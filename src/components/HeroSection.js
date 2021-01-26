import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/London4.mp4' autoPlay loop muted />
      <h1>SMART BROTHERS</h1>
      <p>The best company for</p>
      <p>House or Apartment refurbishment</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('Hi there, thank you that gave me a chance to resubmit my work!')}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
