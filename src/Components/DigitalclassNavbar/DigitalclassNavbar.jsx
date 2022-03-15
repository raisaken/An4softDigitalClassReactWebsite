import React from "react";
import logo from "../../Pictures/office+logo 1.png";
import { FaSearch } from "react-icons/fa";
import "./DigitalclassNavbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function DigitalclassNavbar() {
  return (
    <div className="DigitalclassNavbar">
      <Navbar expand="lg">
        <Container>
          <div className="navbarLogo">
            <Navbar.Brand>
              <img src={logo} alt="" />
            </Navbar.Brand>
          </div>

          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action{" "}
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>

          <div className="searchBar">
            <input
              type="text"
              placeholder="Graphic illustration"
              className="input"
            />
            <FaSearch className="searchIcon" />
          </div>

          <div className="navbuttons">
            <Nav className="me-auto">
              <Nav.Link className="Register" href="#link">
                Register
              </Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link className="Login" href="#link">
                Log in
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default DigitalclassNavbar;
