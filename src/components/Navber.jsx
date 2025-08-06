import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Image from "./Image";
import Logo from "../assets/Logo.png";

const Navber = () => {
  return (
    <section className="navbarsection">
      <Navbar expand="lg" className="main">
        <Container>
          <Navbar.Brand href="#home">
            <Image className="logodesign" src={Logo} alt="hello" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto listitem">
              <Nav.Link className="menuitem" href="/About">
                About
              </Nav.Link>
              <Nav.Link className="menuitem" href="/Footerpart">
                Features
              </Nav.Link>
              <Nav.Link className="menuitem" href="#link">
                Pricing
              </Nav.Link>
            </Nav>
            <Button className="btn" variant="dark">
              GET STARTED
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Navber;
