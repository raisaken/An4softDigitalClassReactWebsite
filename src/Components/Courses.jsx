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

function SamplePrevArrowB(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#fff",
        height: "25px",
        width: "25px",
        borderRadius: "50%",
        paddingTop: "2px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
        textAlign: "center",
        top: "20px",
        left: "-5px ",
      }}
    >
      <BiChevronLeft
        style={{
          position: "relative",
          top: "-24px",
          left: "-2px",
          zIndex: "2",
          fontSize: "30px",
          fontWeight: "300",
          color: "rgb(115 107 107)",
          transition: "transform .2s",
        }}
        className="BiChevron"
      />
    </div>
  );
}
function SampleNextArrowB(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        right: "-30px",
        top: "22px",
        height: "25px",
        width: "25px",
        borderRadius: "50%",
        paddingTop: "2px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
      }}
      onClick={onClick}
    >
      <BiChevronRight
        style={{
          position: "relative",
          top: "-25px",
          right: "3px",
          fontSize: "30px",
          fontWeight: "300",
          color: "rgb(115 107 107)",
          transition: "transform .2s",
        }}
        className="BiChevron"
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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
          <Nav className="CoursesNav">
            <Slider {...settingsB} className="CoursesNavSlider">
              <Nav.Item className="CoursesNavItem">
                <Nav.Link eventKey="first" className="tab1">
                  Math
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Science</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Music</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Programming</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Account</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">NewClass</Nav.Link>
              </Nav.Item>
            </Slider>
          </Nav>

          <Tab.Content className="CoursesTab">
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
            <Tab.Pane eventKey="second">
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
            <Tab.Pane eventKey="third">
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
            <Tab.Pane eventKey="fourth">
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
            <Tab.Pane eventKey="fifth">
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
            <Tab.Pane eventKey="sixth">
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
