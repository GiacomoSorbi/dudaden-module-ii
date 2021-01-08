import React from 'react';
import './HomeStl.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Welcome to Smart Brothers <br />
      </h1>
      <p>If you are looking for house refurbishment in London, 
      Surrey and the South East, then contact us today. <br />
      View our gallery of House Refurbishments project.
      </p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/one.png'
              text='Our house or apartment refurbishment service, across London, Surrey and the South East, 
              provides you with a dedicated project manager that will oversee the entire project. 
              This allows you to have a single point of contact instead of having to deal with the 
              multiple trades required in a house refurbishment.'
              label='RESPONSIBLE'
              path='/services'
            />
            <CardItem
              src='images/two.png'
              text='Smart Brothers are the property renovation and refurbishment specialists in London and the 
              South East. Our specialists can help you transform your property just the way you want it.
              We specialise in renovating and refurbishing houses, flats, offices, business premises, and 
              much more, for both domestic and commercial use.'
              label='SMART'
              path='/projects'
            />
            <CardItem
              src='images/three.png'
              text='We believe that the customer comes first and to ensure this we make sure that we provide an 
              excellent standard of customer service and competitive pricing on all our services throughout 
              London and the South East.
              Call today for a free quote and free site visit on +44 7842 283628 or email us on info@smartbrothers.co.uk.'
              label='INDUSTRIOUS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
