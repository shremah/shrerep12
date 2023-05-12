import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';



function Navbari() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand  style={{fontFamily:'fantasy', color:"Green"}}>NATURE'S WEBSITE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Sidebar">HOME</Nav.Link>
           
            <Nav.Link as={Link} to="/AboutUs">ABOUT US</Nav.Link>
            <NavDropdown title="PRODUCTS" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Bonsai">BONSAI</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FlowerSapling">
                FLOWER SAPLINGS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FruitSapling">
                FRUIT SAPLINGS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/OrganicManure">
               ORGANIC MANURE
              </NavDropdown.Item>
             
              <NavDropdown.Item as={Link} to="/GardeningTools">
              GARDENING TOOLS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FruitSeeds">
              FRUIT SEEDS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/VegetableSeeds">
              VEGETABLE SEEDS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/NatureContact">CONTACT US</Nav.Link>
            <Nav.Link as={Link} to="/FeedbackForm">FEEDBACK</Nav.Link>
          </Nav>
          <Button variant="outline-success"  as={Link} to="/LoginPage">LOGOUT</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbari;