import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
          <Navbar bg="dark" variant="dark">
            <Container className="header-content">
              <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link  className="active" href="/">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
    );
  }
}

export default Header;
