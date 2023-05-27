import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
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
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar