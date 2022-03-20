import React from "react";
import { Container } from "react-bootstrap";
import "./Preparation.css";
import PreparationCard from "./PreparationCard";

function Preparation() {
  return (
    <div className="Preparation">
      <Container className="">
        <div className="PreparationContainerDesc">
          <p className="PreparationContainerTitle">Track your preparation</p>
          <p className="PreparationContainerSee">See all</p>
        </div>
        <p className="PreparationContainerMore">Evaluate your progress with  Mock Tests and detailed results analysis</p>
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
