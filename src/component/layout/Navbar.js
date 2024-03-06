import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationPage() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <strong>Maharshi Yoga Kendra</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/User">Users</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link to="/AddUser"><Button variant="outline-info">Register For Online Classes</Button></Link> &nbsp;
            <Link to="/ExistingUser"><Button variant="outline-warning">Login</Button></Link>
          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationPage;