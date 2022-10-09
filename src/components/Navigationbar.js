import './logo.svg';
import {Container,Navbar,Nav,Form,Button} from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <div>
    <Navbar bg="warning" expand="lg">
    <Container>
      <Navbar.Brand className="justify-content-end" href="/"><img src="./logo.svg" className="App-logo" alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="./Pages/Tentang.js">Tentang</Nav.Link>
          <Nav.Link href="./Pages/Kontak.js">Kontak</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
  )
}

export default Navigationbar