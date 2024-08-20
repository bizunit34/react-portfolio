import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <>
      <div className='logo-name'>
          <p className='header'>
            <Link to='/react-portfolio/'>
              <img className='logo' id='LinkedIn' alt='Chris Martins Logo' src={require('../images/logo.png')} />
            </Link>
          </p>
      </div>
      

      
      <DropdownButton size='sm' variant='secondary' className='navigation-list' id='dropdown-basic-button' title='Navigation'>
        <Dropdown.Item href='/'>Home</Dropdown.Item>
        <Dropdown.Item href='/about-me'>About Me</Dropdown.Item>
        <Dropdown.Item href='/projects'>Projects</Dropdown.Item>
      </DropdownButton>
      <DropdownButton size='sm' variant='secondary' className='contact-list' id='dropdown-basic-button' title='Contact Me'>
        <Dropdown.Item target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/chrisdmartin-18/'><FontAwesomeIcon className='icon-link' color='black' icon={['fab', 'linkedin']} /> LinkedIn</Dropdown.Item>
        <Dropdown.Item target='_blank' rel='noopener noreferrer' href='https://github.com/bizunit34'><FontAwesomeIcon className='icon-link' color='black' icon={['fab', 'github']} /> GitHub</Dropdown.Item>
        <Dropdown.Item target='_blank' rel='noopener noreferrer' href='mailto:chris.bizunit34@gmail.com'><FontAwesomeIcon className='icon-link' color='black' icon={faEnvelopeSquare} /> Email</Dropdown.Item>
      </DropdownButton>
    </>
  )
}

export default Header;