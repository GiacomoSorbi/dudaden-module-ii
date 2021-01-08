import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Smart Brothers company news to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Home</Link>
            <Link to='/services'>Services</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/sign-up'>Contact</Link>
          </div>
        </div>
    
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.instagram.com/" }}target='_blank' aria-label='Instagram'>Instagram</Link>
            <Link to={{ pathname: "https://www.facebook.com/" }}target='_blank' aria-label='Facebook'>Facebook</Link>
            <Link to={{ pathname: "https://www.youtube.com/" }}target='_blank' aria-label='Youtube'>Youtube</Link>
            <Link to={{ pathname: "https://twitter.com/" }}target='_blank' aria-label='Twitter'>Twitter</Link>
          </div>
        </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Smart<i class="fas fa-users" />Brothers
            </Link>
          </div>
          <small class='website-rights'>SmartBrothers © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to={{ pathname: "https://www.linkedin.com/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
