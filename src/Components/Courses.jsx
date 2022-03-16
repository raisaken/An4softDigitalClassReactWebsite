import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Courses.css";
import Mycard from "./Mycard";
import "./Mycard.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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
          top:"138px",
          left:"520px",
          zIndex: "2",
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
function Courses() {
  const [key, setKey] = useState("Programming");
  var settings = {
    dots: true,
    infinite: false,
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
  return (
    <div className="Courses">
      <Container >
        <h1 className="CoursesTitle">More Than 500 courses in 20 categories</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="newclass" title="New Class">
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
          </Tab>
          <Tab eventKey="Math" title="Math">
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
          </Tab>
          <Tab eventKey="Science" title="Science">
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
          </Tab>
          <Tab eventKey="Programming" title="Programming">
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
          </Tab>
          <Tab eventKey="Music" title="Music">
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
          </Tab>
          <Tab eventKey="Account" title="Account">
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
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Courses;
