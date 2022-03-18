import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Female from "../Pictures/Female-Student-PNG-Image 1.png";

function Header() {
  return (
    <div className="header">
      <Container>
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
            <img src={Female} alt="" className="FemaleImgFemale" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
