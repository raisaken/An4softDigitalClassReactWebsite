import React, { useState } from "react";
import { Card, Col, Container, Row, Stack, Tab, Tabs } from "react-bootstrap";
import LeftArrow from "../Pictures/LeftArrow.png";
import RightArrow from "../Pictures/RightArrow.png";
import Vector3 from "../Pictures/Vector 3.png";
import Vector5 from "../Pictures/Vector 5.png";
import Ellipse6 from "../Pictures/Ellipse 6.png";
import Rectangle1047 from "../Pictures/Rectangle 1047.png";
import Rectangle1049 from "../Pictures/Rectangle 1049.png";
import Rectangle1048 from "../Pictures/Rectangle 1048.png";
import Rectangle1005 from "../Pictures/Rectangle 1005.png";
import Rectangle1003 from "../Pictures/Rectangle 1003.png";
import Rectangle1033 from "../Pictures/Rectangle 1033.png";
import Rectangle1004 from "../Pictures/Rectangle 1004.png";
import Rectangle1017 from "../Pictures/Rectangle 1017.png";
import Footer from "./Footer";
import "./Body.css";
import Courses from "./Courses";
import Levels from "./Levels";
import Languages from "./Languages";
import Mycard from "./Mycard";
import PreparationCard from "./PreparationCard";
import Preparation from "./Preparation";
import Header from "./Header";
import Workshop from "./Workshop/Workshop";
// import TestTab from "./TestTab";
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,500&display=swap"
  rel="stylesheet"
></link>;

function Body() {
  const [key, setKey] = useState("home");

  return (
    <div className="mainBody">
      <Header />
        <Courses />
      {/* <Workshop /> */}
      <Workshop />
      {/* ----------------------------------------------------------------------------- */}
      <Levels />

      {/* ----------TestTab------------------------------------------------------------- */}
      {/* <TestTab/> */}
      {/* --------Popular languages----------------------------------------------------------------------- */}
      <Languages />

      {/* ------PreparationCard--------------------------------------------------------------------------------------- */}
      <Preparation></Preparation>

      {/* --------------------------------------------------------------------------- */}
      <div className="SubscribedClass">
        <Container>
          <div className="MostClass">Most Subscribed Classs</div>
          <div className="SubscribedClassCard">
            <Mycard />
            <Mycard />
            <Mycard />
            <Mycard />
          </div>
        </Container>
      </div>
      {/* -------------------------------------------------------------------------------------- */}
      <div className="Learnany">
        <Container>
          <Row>
            <Col className="LearnanyCol">
              <div className="LearnanyTitle"> Learn anytime, anywhere</div>
              <div className="LearnanyDesc">
                Propel your career, get a degree, or expand your knowledge at
                any time anywhere
              </div>
              <button className="LearnanyButton">Find out how</button>
            </Col>
            <Col>
              <div className="Rec1">
                <img src={Rectangle1047} alt="" />
              </div>
              <div className="Rec2">
                <img src={Rectangle1049} alt="" />
              </div>
              <div className="Rec3">
                <img src={Rectangle1048} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="interested">
        <Container>
          <Row>
            <Col>
              <div>
                <img src={Vector5} className="vector1" alt="" />
                <img src={Vector5} className="vector2" alt="" />
                <img src={Vector3} className="vector3" alt="" />
              </div>
            </Col>
            <Col className="interestedCol">
              <div className="interestedColTitle">
                Interested in becoming a teacher with edigital class?
              </div>
              <div className="interestedColDesc">
                We are recruiting more tutors.{" "}
              </div>
              <button className="interestedColBut">Apply for teach</button>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Body;
