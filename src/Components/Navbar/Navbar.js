import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = ({ showLoader }) => {
  return (
    <Navbar className="navigation-bar">
      <Navbar.Brand className="nav-logo" href="#home">
        <Link to="/" onClick={showLoader} className="link-style" />
        <span className="logo">Y</span> Convenient Hacker News
      </Navbar.Brand>
      <Nav className="mr-auto navbar2">
      <Dropdown className="dropdown">
          <Dropdown.Toggle className="dropdown-button" variant="success" id="dropdown-basic">
            <span>News</span>
          </Dropdown.Toggle>

          <Dropdown.Menu style={dropDownMenuStyle}>
            <Dropdown.Item onClick={showLoader}>
              <Link to="/top" style={{ textDecoration: "none", color: "#000" }}>
                <div>Top</div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={showLoader}>
              <Link to="/new" style={{ textDecoration: "none", color: "#000" }}>
                <div> New</div>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={showLoader}>
              <Link
                to="/best"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div>Best</div>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/shows" style={linkStyle} className="navLink">
          <span>Show</span>
        </Link>

        <Link to="/ask" style={linkStyle} className="navLink">
          <span>Ask</span>
        </Link>

        <Link to="/jobs" style={linkStyle} className="navLink">
          <span>Jobs</span>
        </Link>
      </Nav>
    </Navbar>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#000',
  cursor: 'pointer',
  marginRight: '10px',
  padding: '5px',
  paddingLeft: '20px',
  paddingRight: '20px',
  transition: ' all 0.5s',
};

const dropDownMenuStyle = {
  boxShadow: " 0px 2px 15px -7px rgba(0, 0, 0, 0.5)",
  color: '#000'
};

export default NavigationBar;
