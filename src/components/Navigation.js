import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="">#Indonesialawancorona</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#chart">Statistik Covid-19 di Indonesia</Nav.Link>
            <Nav.Link href="#provinsi">Data Kasus di Provinsi</Nav.Link>
            <Nav.Link href="#hotline">Hotline</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
