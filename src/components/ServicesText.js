import React from 'react';
import './Cards.css';
import './ProjectsStl.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/floor12.jpg'
              text='Our professional carpenters work across London, Surrey and Kent. Our customers 
              recommend our services not only due to our competitively priced services but 
              the high standard of our work and the customer service we provide.
              We can supply and lay any flooring you require. Our fully trained and qualified team 
              have gathered years of experience in this trade and will assist you in any way they can.  
              Whether you have old woodwork that needs to be made good or you would like new skirting 
              and architraves throughout, we can help you. If you have flat-pack furniture that needs 
              assembling or you would like custom built shelving or wardrobes, we have the experience 
              necessary to assist you.'
              label='CARPENTRY SERVICES'
              path='/services'
            />
            <CardItem
              src='images/roof.jpg'
              text=' We provide a comprehensive flat roofing service, specializing in mastic asphalt and built up felt for 
              both residential and commercial clients. Whether you would like a whole new roof or just repairs to an 
              old one we will be happy to help. There is no job too large or too small. As well as flat roofing 
              installations and flat roof repairs we can also complete other jobs such as UPVC fascias and soffits, 
              lead work and DPMS.
              With all the experience our roofers have gained they are able to construct any roof you require. 
              Using only the highest quality materials we guarantee the highest quality finish. 
              Other jobs can also be completed such as guttering, replacing tiles, problem-solving and 
              chimney repointing.'
              label='ROOFING SERVICES'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/paintwall.jpg'
              text='Our decorating team can adapt to any task you put in front of them. 
              If you already have your wallpaper or have an idea of the one you would like, 
              we can assist you in finding the perfect paper and have an expert readily 
              available to transform your room from the one you have now into the room you 
              desire in your mind. Our team strives to deliver on our promise here 
              at Smart Brothers.'
              label='OUR DECORATING SERVICE'
              path='/services'
            />
            <CardItem
              src='images/garden.jpg'
              text='Whether you are looking to get a new shed assembled or a complete landscaping service then we have the team for you.
              Choose our gardening services today.
              After being in the trade for many years our team are 
              in the perfect position to assist you in finding the best-suited design for your property and advise 
              you on the right selection of products to complete the job to the highest standard.'
              label='LANDSCAPING SERVICES'
              path='/services'
            />
            <CardItem
              src='images/plaster.jpg'
              text='Our plasterers 
              are experienced and highly professional, meaning that they can meet your every requirement. 
              All aspects of plastering are undertaken and our hours are flexible to cause as little disruption 
              to your everyday life as possible. 
              We believe that a high level of workmanship is enhanced by an affordable price and an excellent level 
              of customer satisfaction.'
              label='PLASTERING SERVICES'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;