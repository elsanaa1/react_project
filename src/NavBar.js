import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {


      return (
<Navbar bg="dark" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">Mobile-Boutique</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#Categories">Categories</Nav.Link>
    <Nav.Link href="#About">About</Nav.Link>
    <Nav.Link href="#Contact">Contact</Nav.Link>          
  </Nav>
</Container>
</Navbar>
    );
}


export default Navigation;