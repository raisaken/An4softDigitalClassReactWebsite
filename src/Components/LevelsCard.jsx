import React from "react";
import { Card } from "react-bootstrap";
import Rectangle997 from "../Pictures/Rectangle 997.png";
import Rectangle1006 from "../Pictures/Rectangle 1006.png";
import Ellipse6 from "../Pictures/Ellipse 6.png";
import "./LanguageCard.css";

<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Poppins:wght@100;200;300;400;500;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300&display=swap"
  rel="stylesheet"
></link>;

function LevelsCard() {
  return (
    <div className="LanguageCard">
      <Card
        className="LanguageCard1"
        style={{ border: "none", borderRadius: "0.25px" }}
      >
        <Card.Img src={Rectangle997}></Card.Img>
        <div className="LanguageCardDesc">
          <img src={Ellipse6} alt="" className="LanguageCardImg" />
          <div className="LanguageCardDescDetails">
            <div className="LanguageCardDescTitle">By Raju Hamal</div>
            <div className="LanguageCardDescDesc">
              More than 6 year of experience
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LevelsCard;
