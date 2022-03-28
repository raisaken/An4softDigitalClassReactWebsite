import React from "react";
import { Card } from "react-bootstrap";

import "./LevelsCard.css";


<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Poppins:wght@100;200;300;400;500;600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300&display=swap"
  rel="stylesheet"
></link>;

function LevelsCard({ name, img1, img2 }) {
  return (
    <div className="LevelsCard">
      <Card
        className="LevelsCard1"
        style={{ border: "none", borderRadius: "6px" }}
      >
        <Card.Img src={img1} className="Rectangle997"></Card.Img>
        <Card.Img src={img2} className="Rectangle1006"></Card.Img>
        <div className="LevelsCardDesc">
          <div className="LanguageCardDescTitle">{name}</div>
        </div>
      </Card>
    </div>
  );
}

export default LevelsCard;
