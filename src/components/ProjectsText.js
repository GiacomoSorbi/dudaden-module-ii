import React, { Component } from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './ServicesStl.css';

export default class ServicesText extends Component {
  render() {
    return (
      <div>
        <Container>
          <Col xs={14} sm={14} smOffset={0}>
            <h3>Refurbishment and Design service</h3>
            <Image src="images/house11.jpg" className="about-profile-pic" rounded />
            <Image src="images/house12.jpg" className="about-profile-pic" rounded />
            <p>Our project manager will work closely with you to make sure you are happy 
              throughout the entire process and you are free to have as much or as little 
              input along the way as you please. Each individual project will require its 
              own schedule of works that needs to be followed so that the right trades are 
              completing the right jobs at the right time. <br/>
              Our team specialize in full and partial house refurbishments; 
              Here are some specifics about what that means in practice:
              A full or partial house refurbishment could include: bathroom installation; 
              kitchen installation; new flooring; new skirtings and architraves; new radiators; 
              full electrical rewiring; and full redecoration.</p>
          </Col> <br/> <br/> <br/> <br/>
          <Col xs={14} sm={14} smOffset={0}>
            <h3>Basement Refurbishments</h3>
            <Image src="images/floor6.jpg" className="about-profile-pic" rounded />
            <Image src="images/floor7.jpg" className="about-profile-pic" rounded />
            <p>A dedicated project manager will oversee your whole basement refurbishment. 
              This helps to ensure the project runs smoothly, and means that you have one point of 
              contact coordinating the whole process. Projects run on a schedule, the project manager 
              will ensure tasks are completed in the correct order, by the correct trades people at the correct time. <br/>
              Our talented team has plenty of experience in completing basement refurbishments on time and on schedule. 
              Outside trades people are sometimes required to complete specialist aspects of a project, when this is the 
              case, we call upon our network of trusted sub-contractors.</p>
          </Col> <br/> <br/> <br/> <br/> <br/>
          <Col xs={14} sm={14} smOffset={0}>
            <h3>Flat Refurbishments</h3>
            <Image src="images/unnamed.jpg" className="about-profile-pic" rounded />
            <Image src="images/pl.jpg" className="about-profile-pic" rounded />
            <p>Our flat refurbishment service, across London, Surrey and the South East, provides you with a dedicated 
              project manager that will oversee the entire project. This allows you to have a single point of contact 
              instead of having to deal with the multiple trades required in a flat refurbishment. <br/>
              From the start to the finish, your flat refurbishment project the site will be kept as clean and tidy as 
              conditions allow. We pride ourselves in the ability to provide you with a high standard of work along 
              with a friendly welcoming team that will do everything they can and more to make sure the whole process 
              is stress-free as it can be.</p>
          </Col> <br/> <br/> <br/> <br/> <br/> 
          <Col xs={14} sm={14} smOffset={0}>
            <h3>Property Refurbishments</h3>
            <Image src="images/images1.jpg" className="about-profile-pic" rounded />
            <Image src="images/images2.jpg" className="about-profile-pic" rounded />
            <p>From day one, you are allocated your own project manager who will act as your single point of contact 
              throughout the project. Coordinating different trades people to make sure your project stays on schedule 
              can be a stressful experience. Your project manager takes away this stress and takes control of the schedule. <br/>
              Some projects require the use of external specialist trades people, when this is the case we have a network of 
              trusted sub-contractors that we can provide. The project manager will liaise with any sub-contractors and arrange 
              for them to be on-site when and where they are needed. This means you don’t have to, and ensures that the project 
              runs smoothly.</p>
          </Col> <br/> <br/> <br/> <br/> <br/>
        </Container>
      </div>
    )
  }
}