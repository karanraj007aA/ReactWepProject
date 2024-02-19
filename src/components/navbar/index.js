import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample({ onClick }) {
  return (
    <>
      <Navbar bg="primary" color="white">
        <Container>
          <Navbar.Brand href="#home">ShopBazaar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Categories</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing" onClick={onClick}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
