import React from "react";
import { Card } from "react-bootstrap";
import Rectangle1037 from "../Pictures/Rectangle 1037.png";
import "./PreparationCard.css";

function PreparationCard() {
  return (
    <div className="PreparationCard">
      <Card className="PreparationSingleCard">
        <div className="PreparationCardDetails">
          <div className="PreparationCardTitle">Korean Language Basic Mockup Test</div>
          <div className="PreparationCardDate"
          >Date: jan 4, 9:30 PM</div>
          <div className="PreparationCardButtons">
            <button className="PreparationCardButtonsFree">FREE</button>
            <button className="PreparationCardButtonsEnroll">ENROLL NOW</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PreparationCard;
