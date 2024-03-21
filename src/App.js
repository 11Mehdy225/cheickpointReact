import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'
import white from './images/white.png';

const App = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={white} alt='logof' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Acceuil</Nav.Link>
            <Nav.Link href="#pricing">Galerie</Nav.Link>
            <NavDropdown title="Nous" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Departements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nos realisations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nos projets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Notre rang mondial 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Nous contacter</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Notre siege
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h2 className='notreTitre'>Nous vous souhaitons la bienvenue dans le futur</h2>
        </div>
    );
};

export default App;