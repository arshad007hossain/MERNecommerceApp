import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect> 
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ALLSHOP</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
            <LinkContainer to="/cart">
              <Nav.Link to="/cart"><i className='fas fa-shopping-cart px-1'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link to="/login"><i className='fas fa-user px-1'></i>Sign In</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header