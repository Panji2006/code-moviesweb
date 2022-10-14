import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5">
      <Container>
        <Navbar.Brand href="/">Created With <i className="bi bi-chat-heart-fill">Love</i></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Allright Reserved: <a href="#login" className="text-decoration-none">2022</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;