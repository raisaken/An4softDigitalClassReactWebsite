import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import LeftArrow from "../Pictures/LeftArrow.png";
import RightArrow from "../Pictures/RightArrow.png";
import GreyEllipse from "../Pictures/GreyEllipse.png";
import BlueEllipse from "../Pictures/BlueEllipse.png";
import Class from "./Class";
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
import Advertise from "./Advertise";
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Montserrat:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,500&display=swap"
  rel="stylesheet"
></link>;

function Body() {
  return (
    <div className="mainBody">
      <Container className="course">
        <div className="courseTitle">
          More Than 500 courses in 20 categories
        </div>
        <div className="courses">
          <Stack direction="horizontal" gap={3}>
            <div className="courseItem">New Class</div>
            <div className="courseItem">Math</div>
            <div className="courseItem">Science</div>
            <div className="courseItem">Programming</div>
            <div className="courseItem">Music</div>
            <div className="courseItem">Account</div>
          </Stack>
        </div>
        <div>
          <Class />
          <div className="slider">
            <img className="sliderItem1" src={LeftArrow} alt="" />
            <img className="sliderItem" src={GreyEllipse} alt="" />
            <img className="sliderItem" src={BlueEllipse} alt="" />
            <img className="sliderItem" src={GreyEllipse} alt="" />
            <img className="sliderItem" src={GreyEllipse} alt="" />
            <img className="sliderItem1" src={RightArrow} alt="" />
          </div>
        </div>
      </Container>
      {/* <Advertise /> */}
      {/* ----------------------------------------------------------------------------- */}
      <Container>
        <div className="level">Choose by Level</div>
        <div className="levelStack">
          <Stack direction="horizontal" gap={3}>
            <div className="SingleLevel1 ">Primary</div>
            <div className="SingleLevel ">Secondory</div>
            <div className="SingleLevel ">Bachelor</div>
            <div className="SingleLevel ">Master</div>
          </Stack>
        </div>
        <div className="levelCard">
          <Card className="levelSingleCard">
            <Card.Img src={Rectangle1005} />
          </Card>
          <Card className="levelSingleCard">
            <Card.Img src={Rectangle1003} />
          </Card>
          <Card className="levelSingleCard">
            <Card.Img src={Rectangle1005} />
          </Card>
          <Card className="levelSingleCard">
            <Card.Img src={Rectangle1004} />
          </Card>
          <Card className="levelSingleCard">
            <Card.Img src={Rectangle1003} />
          </Card>
        </div>
        <div className="LeftArrow">
          <img src={LeftArrow} alt="" className="LefttArrowImg" />
        </div>
        <div className="RightArrow">
          <img src={RightArrow} alt="" className="RightArrowImg" />
        </div>
      </Container>
      {/* ------------------------------------------------------------------------------- */}
      <Container>
        <div className="level1">Popular Languages</div>
        <div className="levelStack">
          <Stack direction="horizontal" gap={3}>
            <div className="SingleLevel1 ">Korean</div>
            <div className="SingleLevel ">Secondory</div>
            <div className="SingleLevel ">Bachelor</div>
            <div className="SingleLevel ">Master</div>
            <div className="SingleLevel ">Master</div>
          </Stack>
        </div>
        <div className="levelCard">
          <Card className="levelSingleCard1">
            <Card.Img src={Rectangle1017} />
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <img src={Ellipse6} alt="" className="levelCardImg" />
                </Col>
                <Col>
                  <Card.Title className="levelSingleCard1Title">
                    By Raju Hamal
                  </Card.Title>
                  <Card.Text className="levelSingleCard1Desc">
                    More than 6 year of experience
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="levelSingleCard1">
            <Card.Img src={Rectangle1017} />
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <img src={Ellipse6} alt="" className="levelCardImg" />
                </Col>
                <Col>
                  <Card.Title className="levelSingleCard1Title">
                    By Raju Hamal
                  </Card.Title>
                  <Card.Text className="levelSingleCard1Desc">
                    More than 6 year of experience
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="levelSingleCard1">
            <Card.Img src={Rectangle1017} />
            <Card.Body>
              <Row>
                <Col xs={3}>
                  <img src={Ellipse6} alt="" className="levelCardImg" />
                </Col>
                <Col>
                  <Card.Title className="levelSingleCard1Title">
                    By Raju Hamal
                  </Card.Title>
                  <Card.Text className="levelSingleCard1Desc">
                    More than 6 year of experience
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="LeftArrow">
          <img src={LeftArrow} alt="" className="LefttArrowImg" />
        </div>
        <div className="RightArrow">
          <img src={RightArrow} alt="" className="RightArrowImg" />
        </div>
      </Container>

      {/* --------------------------------------------------------------------------------------------- */}

      <div className="Track">
        <Container>
          <div className="TrackGroup ">
            <div className="TrackTitle">Track your preparation</div>
            <div className="TrackSee">See all</div>
          </div>
          <div className="TrackDesc">
            Evaluate your progress with Mock Tests and detailed results analysis
          </div>
          <div className="Trakcard">
            <Card
              className="LanguageCard"
              style={{ backgroundImage: `url(${Rectangle1033})`}}
            >
              <div className="MockTest">Korean Language Basic Mockup Test</div>
              <div className="date">Date: jan 4, 9:30 PM</div>
              <Row>
                <Col>
                  <button className="free">FREE</button>
                </Col>
                <Col className="enrollBtn">
                  <button className="enroll">ENROLL NOW</button>
                </Col>
              </Row>
            </Card>
            <Card
              className="LanguageCard"
              style={{ backgroundImage: `url(${Rectangle1033})` }}
            >
              <div className="MockTest">Korean Language Basic Mockup Test</div>
              <div className="date">Date: jan 4, 9:30 PM</div>
              <Row>
                <Col>
                  <button className="free">FREE</button>
                </Col>
                <Col>
                  <button className="enroll">ENROLL NOW</button>
                </Col>
              </Row>
            </Card>
            <Card className="LanguageCard">
              <div className="MockTest">Korean Language Basic Mockup Test</div>
              <div className="date">Date: jan 4, 9:30 PM</div>
              <Row>
                <Col>
                  <button className="free">FREE</button>
                </Col>
                <Col>
                  <button className="enroll">ENROLL NOW</button>
                </Col>
              </Row>
            </Card>
          </div>
        </Container>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="SubscribedClass">
        <Container>
          <div className="MostClass">Most Subscribed Classs</div>
          <Class />
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

      {/* ------------------------------------------------------------------------------------------ */}

      <Footer />
    </div>
  );
}

export default Body;
