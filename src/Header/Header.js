import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <>
      <div className='logo-name'>
          <p className='header'>
            <Link to='/'>
              <img className='logo' id='LinkedIn' alt='Chris Martins Logo' src={require('../images/logo.png')} />
            </Link>
          </p>
      </div>
      <DropdownButton size='sm' variant='secondary' className='navigation-list' id='dropdown-basic-button' title='Navigation'>
        <Dropdown.Item href='/'>Home</Dropdown.Item>
        <Dropdown.Item href='/aboutme'>About Me</Dropdown.Item>
        <Dropdown.Item href='/projects'>Projects</Dropdown.Item>
      </DropdownButton>
      <DropdownButton size='sm' variant='secondary' className='contact-list' id='dropdown-basic-button' title='Contact Me'>
        <Dropdown.Item target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/chrisdmartin-18/'>LinkedIn</Dropdown.Item>
        <Dropdown.Item target='_blank' rel='noopener noreferrer' href='https://github.com/bizunit34'>GitHub</Dropdown.Item>
        <Dropdown.Item target='_blank' rel='noopener noreferrer' href='mailto:chris.bizunit34@gmail.com'>Email</Dropdown.Item>
      </DropdownButton>
    </>
  )
}

export default Header;