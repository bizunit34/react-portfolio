import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <section className='home-section'>
        <div className='home-navigation'>
          <Link to='/react-portfolio/aboutme'>
            <div className="top-circle grow">
              <p className='about-me'>
                About Me
              </p>
            </div>
          </Link>
          <Link to='/react-portfolio/projects'>
            <div className="bottom-circle grow">
              <p className='projects'>
              Projects
              </p>
            </div>
          </Link>
        </div>
        <div className='home-text'>
          <p><b>My name is:</b></p>
          <h1>
            Chris Martin
          </h1>
          <p> I’m a full-stack software engineer who loves collaborating with diverse 
            teams and individuals to make something beautiful. My enthusiasm for 
            learning pushes me to grow through failure and success.
          </p>
        </div>
      </section>
    </>
  )
}

export default LandingPage;