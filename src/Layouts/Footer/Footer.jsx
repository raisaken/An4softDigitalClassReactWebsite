import React from "react";
import { Container, Stack } from "react-bootstrap";

import Logo1 from "../../Assets/Images/logo- 1.png";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerbody">
      <Container className="footerbodyContainer">
        <div className=" footerbodyContainerUpper">
          <div className=" footerbodyContainerUpperA">
            <div className="logoRow">
              <div>
                <img src={Logo1} alt="" className="footerLogo" />
              </div>
            </div>
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
          </div>
          <div className=" footerbodyContainerUpperB">
            <div className="programs1">
              <p className="programs">PROGRAMS</p>
              <Stack gap={3}>
                <div className="singleProgram">Math</div>
                <div className="singleProgram">Science</div>
                <div className="singleProgram">Japanese language</div>
                <div className="singleProgram">Korean Language</div>
                <div className="singleProgram">Nepali</div>
              </Stack>
            </div>
            <div className="COMPANY">
              <p className="programs">COMPANY</p>
              <Stack gap={3}>
                <div className="singleProgram">About us</div>
                <div className="singleProgram">Privacy Policy</div>
                <div className="singleProgram">Terms and Conditions</div>
              </Stack>
            </div>
          </div>
          <div className=" footerbodyContainerUpperC">
            <p className="programs">CONTACT</p>
            <Stack gap={3}>
              <div className="singleProgram">Anamnagar Kathmandu</div>
              <div className="singleProgram">info@edigitalclass.com</div>
              <div className="singleProgram">9810233097</div>
            </Stack>
          </div>
        </div>

        <div className="copyright">
          <hr />
          Copyright ?? 2022 Digital class by Entersoft Inside Pvt.Ltd All rights
          reserved.
        </div>
      </Container>
    </div>
  );
}

export default Footer;
