import React from "react";
import { Container } from "react-bootstrap";
import EnglishTeacher from "../../Pictures/Englishteacher.png";
import Rectangle994 from "../../Pictures/Rectangle 994.png";
import Vector8 from "../../Pictures/Vector 8.png";
import "./Workshop.css";

function Workshop() {
  return (
    <div className="Workshop">
      {/* <div className="Workshop1"> */}
        <Container>
          <div className="WorkshopContainer">
            <div>
              <div>
                <img src={Vector8} alt="" />
                <div className="WorkshopTitle">Workshop</div>
              </div>
              <div className="ADVERTISING">
                ADVERTISING, BRANDING & MARKETING
              </div>
              <div className="Prepare">
                Prepare for the challenges of the future
              </div>
              <div className="RemaningTime">
                <div>
                  <hr className="hr" />
                  <div className="RemaningTimeItem">Remaning Time</div>
                  <hr className="hr" />
                </div>
                <div className="Hour">
                  <div className="number">06</div>
                  <div className="numberItem">Hour</div>
                </div>
                <div className="Hour">
                  <div className="number">06</div>
                  <div className="numberItem">Hour</div>
                </div>
                <div className="Hour">
                  <div className="number">06</div>
                  <div className="numberItem">Hour</div>
                </div>
              </div>
              <button className="BookNow">Book Now</button>
            </div>
            <div>
              <img src={EnglishTeacher} className="EnglishTeacher" alt="" />
            </div>
          </div>
        </Container>
        {/* <img src={Rectangle994} className="Rectangle994" alt="" /> */}
      </div>
    // </div>
  );
}

export default Workshop;
