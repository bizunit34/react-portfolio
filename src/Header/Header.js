import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="logo-name">
        <p className="header">
          <Link to="/react-portfolio/">
            <img
              className="logo"
              id="LinkedIn"
              alt="Chris Martins Logo"
              src={require("../images/logo.png")}
            />
          </Link>
        </p>
      </div>

      <DropdownButton
        size="sm"
        variant="secondary"
        className="navigation-list"
        id="dropdown-basic-button"
        title="Navigation"
      >
        <Dropdown.Item className="navigation">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="navigation">
          <Link to="/about-me" style={{ textDecoration: "none" }}>
            About Me
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="navigation">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        size="sm"
        variant="secondary"
        className="contact-list"
        id="dropdown-basic-button"
        title="Contact Me"
      >
        <Dropdown.Item
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/chrisdmartin-18/"
          className="navigation"
        >
          <FontAwesomeIcon
            className="icon-link"
            color="black"
            icon={["fab", "linkedin"]}
          />{" "}
          LinkedIn
        </Dropdown.Item>
        <Dropdown.Item
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bizunit34"
          className="navigation"
        >
          <FontAwesomeIcon
            className="icon-link"
            color="black"
            icon={["fab", "github"]}
          />{" "}
          GitHub
        </Dropdown.Item>
        <Dropdown.Item
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:chris.bizunit34@gmail.com"
          className="navigation"
        >
          <FontAwesomeIcon
            className="icon-link"
            color="black"
            icon={faEnvelopeSquare}
          />{" "}
          Email
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default Header;
