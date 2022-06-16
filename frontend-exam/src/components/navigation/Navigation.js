import React from "react";
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar style={{background: "#20232a"}}  variant="dark" expand="lg">
      <Navbar.Brand href="#home">Examen - X</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/lista" className="nav-link" >Lista</Link>
            <Link to="/create" className="nav-link" >Crea Pregunta</Link>
            <Link to="/user" className="nav-link" >Crea User</Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link to="/create" className=" dropdown-item" > crear Pregunta</Link>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="/create">
              action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
