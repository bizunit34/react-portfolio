import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-name">
        <p className="footer-name">( ...Chris Martin )</p>
      </div>
      <DropdownButton
        size="sm"
        variant="secondary"
        className="navigation-list-footer"
        id="dropdown-basic-button"
        title="Navigation"
      >
        <Dropdown.Item>
          <Link to="/projects">Home</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/about-me">About Me</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/projects">Projects</Link>
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        size="sm"
        variant="secondary"
        className="contact-list-footer"
        id="dropdown-basic-button"
        title="Contact Me"
      >
        <Dropdown.Item
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/chrisdmartin-18/"
        >
          LinkedIn
        </Dropdown.Item>
        <Dropdown.Item
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bizunit34"
        >
          GitHub
        </Dropdown.Item>
        <Dropdown.Item
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:chris.bizunit34@gmail.com"
        >
          Email
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default Footer;
