import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

// import Container from 'react-bootstrap/Container';

const NavBar = () => {

  const handleLogout = ({}) => {

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

        <Nav className="gap-5">
          <Button type='button' onClick={handleLogout}>Log Out</Button>
            {/* <Nav.Link className="btn btn-primary" href="#">Login</Nav.Link>
            <Nav.Link eventKey={2} className="btn btn-light text-black" href="#">
              Sign up
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar