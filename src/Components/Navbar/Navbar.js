import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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
        <Link style={linkStyle} to="/top">
          <div>Top</div>
        </Link>

        <Link to="/new" style={linkStyle}>
          <div> New</div>
        </Link>

        <Link to="/best" style={linkStyle}>
          <div>Best</div>
        </Link>

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

export default NavigationBar;
