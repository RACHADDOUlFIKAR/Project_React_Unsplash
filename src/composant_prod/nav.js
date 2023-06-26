import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <><Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h3>Project Unsplash Api .</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  );
}

export default navbar;