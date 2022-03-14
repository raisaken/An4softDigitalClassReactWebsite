import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Courses.css";
import LanguageCard from "./LanguageCard";
import "./Languages.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import LevelsCard from "./LevelsCard";
import './Levels.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        height: "35px",
        width: "35px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        textAlign: "center",
        paddingTop: "6px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
      }}
      onClick={onClick}
    >
      <BiChevronRight
        style={{
          position: "relative",
          top: "-22px",
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

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        height: "35px",
        backgroundColor: "#fff",
        width: "35px",
        borderRadius: "50%",
        textAlign: "center",
        paddingTop: "2px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <BiChevronLeft
        style={{
          position: "relative",
          top: "-18px",
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

function Languages() {
  const [key, setKey] = useState("home");
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    <div className="Levels">
      <Container>
        <h1 className="LanguagesTitle">Choose by Level</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Primery">
            <Slider {...settings}>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
            </Slider>
          </Tab>
          <Tab eventKey="Secondery" title="Secondery">
            <Slider {...settings}>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
            </Slider>
          </Tab>
          <Tab eventKey="Bachelor" title="Bachelor">
            <Slider {...settings}>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
            </Slider>
          </Tab>
          <Tab eventKey="Master" title="Master">
            <Slider {...settings}>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
              <div>
                <LevelsCard />
              </div>
            </Slider>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Languages;
