import React from "react";
import MultilevelDropdown from "./MultilevelDropdownDigitalClass/MultilevelDropdownDigitalClass";
import { FaSearch } from "react-icons/fa";
import "./NavbarDigitalClass";
import logo from "../../../Pictures/logo- 1.png";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarDigitalClass() {
  return (
    <div className="NavbarDigitalClass">
      <Container className="NavbarDigitalClassContainer">
        <div className="navbarLogo">
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
        </div>
        <MultilevelDropdown />
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
    </div>
  );
}

export default NavbarDigitalClass;
