import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="/" className="animate__animated animate__heartBeat"><strong>DAREL</strong> Films</Navbar.Brand>
          <Nav className="me-200">
            <Nav.Link href="#trending" className="animate__animated animate__backInLeft">TRENDING</Nav.Link>
            <Nav.Link href="#superhero" className="animate__animated animate__backInRight">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;