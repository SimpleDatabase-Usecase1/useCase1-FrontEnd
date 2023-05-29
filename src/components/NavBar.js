import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate } from "react-router-dom";

// import Container from 'react-bootstrap/Container';

const NavBar = () => {

  const history = useNavigate();
  var authentication = JSON.parse(sessionStorage.getItem("auth"));
  var user = sessionStorage.getItem("usernames");

  const handleLogout = () => {
    if(authentication) {
      sessionStorage.clear();
      history('/');
      
    }
  }

  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className="p-3">
    {/* Page 1 - home */}
      <LinkContainer to="/home">
        <Navbar.Brand>Home Page</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
           {/* Page 2 - account management page */}
          <LinkContainer to="/account">
            <Nav.Link>Manage Account</Nav.Link>
          </LinkContainer>
           {/* Page 3 - auditor */}
          <LinkContainer to="/auditor">
            <Nav.Link>Auditor</Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav className="collapse navbar-collapse justify-content-end">
          {authentication ? 
          <NavDropdown title={user.replace(/['"]+/g, '')}>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown> :
          <LinkContainer to="/">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar