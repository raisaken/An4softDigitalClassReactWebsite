import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Female from "../Pictures/Female-Student-PNG-Image 1.png";
import NavbarDigitalClass from "./ReusableComponents/NavbarDigitalClass/NavbarDigitalClass";
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,500&display=swap"
  rel="stylesheet"
></link>;

function Header() {
  return (
    <div className="header">
      <Container>
        <NavbarDigitalClass />
        <div className=" headerbody">
          <div className="headerbodydesc">
            <div className="headerHeading">
              Find the best trainers and build your future
            </div>
            <div className="headerDesc">
              Choose from 183,000 online video courses with new additions
              published every month
            </div>
          </div>

          <div className="FemaleImg">
            <img src={Female} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
