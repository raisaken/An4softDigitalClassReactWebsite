import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import Female from "../Pictures/Female-Student-PNG-Image 1.png";
import Vector8 from "../Pictures/Vector 8.png";
import GreyEllipse from "../Pictures/GreyEllipse.png";
import BlueEllipse from "../Pictures/BlueEllipse.png";

function Advertise() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <img src={Vector8} alt="" />
              <p>Workshop</p>
            </div>
            <div>ADVERTISING, BRANDING & MARKETING</div>
            <div>Prepare for the challenges of the future</div>
            <div>
              <div>
                <hr />
                <div>Remaning Time</div>
                <hr />
              </div>
              <div>
                <Badge bg="warning" text="white">
                  Warning <br />
                  ok
                </Badge>{" "}
              </div>
            </div>
            <Button variant="light">Book Now</Button>
            <div>
              <div className="slider">
                <img src={GreyEllipse} alt="" />
                <img src={BlueEllipse} alt="" />
                <img src={GreyEllipse} alt="" />
                <img src={GreyEllipse} alt="" />
              </div>
            </div>
          </Col>
          <Col xs={6} md={4} className="FemaleImg">
            <img src={Female} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Advertise;
