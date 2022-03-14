import React from "react";
import { Col, Container, Navbar, NavDropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from "../Pictures/office+logo 1.png";
import Female from "../Pictures/Female-Student-PNG-Image 1.png";
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,500&display=swap"
  rel="stylesheet"
></link>;

function Header() {
  return (
    <div className="header">
      <Container>
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
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            </div>
            <button className="Register">Register</button>
            <button className="Login">Log in</button>
          </Container>
        </Navbar>
        <Row>
          <Col xs={12} md={8}>
            <p className="headerHeading">
              Find the best trainers and build your future
            </p>
            <p className="headerDesc">
              Choose from 183,000 online video courses with new additions
              published every month
            </p>
          </Col>
          <Col xs={6} md={4} className="FemaleImg">
            <img src={Female} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
