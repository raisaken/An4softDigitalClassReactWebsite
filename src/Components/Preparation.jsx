import React from "react";
import { Container } from "react-bootstrap";
import "./Preparation.css";
import PreparationCard from "./PreparationCard";

function Preparation() {
  return (
    <div className="Preparation">
      <Container className="PreparationContainer">
        <div className="PreparationCards">
          <PreparationCard />
          <PreparationCard />
          <PreparationCard />
        </div>
      </Container>
    </div>
  );
}

export default Preparation;
