import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Logo1 from "../Pictures/logo- 1.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,500&display=swap"
  rel="stylesheet"
></link>;

function Footer() {
  return (
    <div className="body">
      <Container>
        <Row>
          <Col>
            <Row className="logoRow">
              <div>
                <img src={Logo1} alt="" className="footerLogo" />
              </div>
            </Row>
            <div className="newIcons">
              <div className="footerIcons">
                <div>
                  <FaFacebook className="icon1fa" />
                </div>

                <div>
                  <FaInstagram className="icon1fa" />
                </div>

                <div>
                  <FaLinkedin className="icon1fa" />
                </div>

                <div>
                  <FaTwitter className="icon1fa" />
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="programs1">
              <div>
                <p className="programs">PROGRAMS</p>
                <Stack gap={3}>
                  <div className="singleProgram">Math</div>
                  <div className="singleProgram">Science</div>
                  <div className="singleProgram">Japanese language</div>
                  <div className="singleProgram">Korean Language</div>
                  <div className="singleProgram">Nepali</div>
                </Stack>
              </div>
              <div>
                <p className="programs">COMPANY</p>
                <Stack gap={3}>
                  <div className="singleProgram">About us</div>
                  <div className="singleProgram">Privacy Policy</div>
                  <div className="singleProgram">Terms and Conditions</div>
                </Stack>
              </div>
            </div>
          </Col>
          <Col  className="contact">
            <p>CONTACT</p>
            <Stack gap={3}>
              <div className="singleProgram">Anamnagar Kathmandu</div>
              <div className="singleProgram">info@edigitalclass.com</div>
              <div className="singleProgram">9810233097</div>
            </Stack>
          </Col>
        </Row>

        <div>
          <hr />
          Copyright © 2022 Digital class by Entersoft Inside Pvt.Ltd All rights
          reserved.
        </div>
      </Container>
    </div>
  );
}

export default Footer;
