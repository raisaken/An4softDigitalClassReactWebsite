import React, { useState } from "react";
import { Container, Nav, Tab, TabContent, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Courses.css";
import Mycard from "./Mycard";
import "./Mycard.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Settings } from "@material-ui/icons";
import { Button } from "bootstrap";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronRight
        style={{
          position: "relative",
          top: "138px",
          right: "545px",
          fontSize: "40px",
          fontWeight: "300",
          color: "#005b7f",
          transition: "transform .2s",
          zIndex: "2 !important",
        }}
        className="BiChevron"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronLeft
        style={{
          position: "relative",
          top: "138px",
          left: "520px",
          fontSize: "40px",
          fontWeight: "300",
          color: "#005b7f",
          transition: "transform .2s",
          zIndex: "2 !important",
        }}
        className="BiChevron"
      />
    </div>
  );
}
function SampleNextArrowB(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronRight
        style={{
          position: "relative",
          top: "138px",
          right: "545px",
          fontSize: "60px",
          fontWeight: "300",
          color: "#000",
          transition: "transform .2s",
          zIndex: "2 !important",
        }}
        className="BiChevronBnext"
      />
    </div>
  );
}

function SamplePrevArrowB(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiChevronLeft
        style={{
          position: "relative",
          top: "138px",
          left: "520px",
          fontSize: "60px",
          fontWeight: "300",
          color: "#000",
          transition: "transform .2s",
          zIndex: "2 !important",
        }}
        className="BiChevronBprev"
      />
    </div>
  );
}
function Courses() {
  const [key, setKey] = useState("Programming");
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settingsB = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    nextArrow: <SampleNextArrowB />,
    prevArrow: <SamplePrevArrowB />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Courses">
      <Container>
        <h1 className="CoursesTitle">More Than 500 courses in 20 categories</h1>
        <Tab.Container defaultActiveKey="first">
          <Nav >
            <Slider {...settingsB}>
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Tab 5</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">Tab 5</Nav.Link>
              </Nav.Item>
            </Slider>
          </Nav>

          <Tab.Content >
            <Tab.Pane eventKey="first">
              <Slider {...settings}>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
              </Slider>
            </Tab.Pane>
            <Tab.Pane eventKey="second" title="Math">
              <Slider {...settings}>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
              </Slider>
            </Tab.Pane>
            <Tab.Pane eventKey="third" title="Science">
              <Slider {...settings}>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
              </Slider>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth" title="Programming">
              <Slider {...settings}>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
              </Slider>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth" title="Music">
              <Slider {...settings}>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
              </Slider>
            </Tab.Pane>
            <Tab.Pane eventKey="Account" title="Account">
              <Slider {...settings}>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
                <div>
                  <Mycard />
                </div>
              </Slider>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Courses;
