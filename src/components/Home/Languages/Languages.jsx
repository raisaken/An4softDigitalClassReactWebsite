import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Courses/Courses.css";
import "./Languages.css";

import { Chinese, French, Japanese, Korean, Nepali } from "./Data";

import LanguageCard from "./Languagecard/LanguageCard";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

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
        // top: "50%",
        // left: "-5px",
        //  display:"none"
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
        width: "35px",
        backgroundColor: "#fff",
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
    <div className="Languages">
      <Container>
        <h1 className="LanguagesTitle">Popular languages</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Korean" className="Languagetabitem">
            <Slider {...settings}>
              {Korean.map((data) => {
                return (
                  <div key={data.id}>
                    <LanguageCard
                      name={data.name}
                      img1={data.img1}
                      img2={data.img2}
                      exp={data.exp}
                    />
                  </div>
                );
              })}
            </Slider>
          </Tab>
          <Tab eventKey="Japanese" title="Japanese">
            <Slider {...settings}>
              {Japanese.map((data) => {
                return (
                  <div key={data.id}>
                    <LanguageCard
                      name={data.name}
                      img1={data.img1}
                      img2={data.img2}
                      exp={data.exp}
                    />
                  </div>
                );
              })}
            </Slider>
          </Tab>
          <Tab eventKey="Chinese" title="Chinese">
            <Slider {...settings}>
              {Chinese.map((data) => {
                return (
                  <div key={data.id}>
                    <LanguageCard
                      name={data.name}
                      img1={data.img1}
                      img2={data.img2}
                      exp={data.exp}
                    />
                  </div>
                );
              })}
            </Slider>
          </Tab>
          <Tab eventKey="Nepali" title="Nepali">
            <Slider {...settings}>
              {Nepali.map((data) => {
                return (
                  <div key={data.id}>
                    <LanguageCard
                      name={data.name}
                      img1={data.img1}
                      img2={data.img2}
                      exp={data.exp}
                    />
                  </div>
                );
              })}
            </Slider>
          </Tab>
          <Tab eventKey="French" title="French">
            <Slider {...settings}>
              {French.map((data) => {
                return (
                  <div key={data.id}>
                    <LanguageCard
                      name={data.name}
                      img1={data.img1}
                      img2={data.img2}
                      exp={data.exp}
                    />
                  </div>
                );
              })}
            </Slider>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Languages;
