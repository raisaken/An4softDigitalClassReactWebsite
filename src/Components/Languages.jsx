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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        height: "30px",
        backgroundColor: "#fff",
        width: "30px",
        borderRadius: "50%",
        textAlign: "center",
        paddingTop: "6px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
      }}
      onClick={onClick}
    >
      <BiChevronRight
        style={{
          fontSize: "25px",
          fontWeight: "300",
          color: "rgb(115 107 107)",
        }}
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
        height: "30px",
        backgroundColor: "#fff",
        width: "25px",
        borderRadius: "0 50% 50% 0",
        textAlign: "center",
        paddingTop: "2px",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
      }}
      onClick={onClick}
    >
      {/* <BiChevronLeft
        style={{
          fontSize: "25px",
          fontWeight: "300",
          color: "rgb(115 107 107)",
        }}
      /> */}
    </div>
  );
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         height: "30px",
//         backgroundColor: "#fff",
//         width: "25px",
//         borderRadius: "50% 0 0 50%",
//         textAlign: "center",
//         paddingTop: "2px",
//         boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

function Languages() {
  const [key, setKey] = useState("home");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
        <h1>Choose by level</h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Korean">
            <Slider {...settings}>
              {/* <div className="LanguagesSlider"> */}
              <div>
                <LanguageCard />
              </div>
              <div>
                <LanguageCard />
              </div>
              <div>
                <LanguageCard />
              </div>
              <div>
                <LanguageCard />
              </div>
              <div>
                <LanguageCard />
              </div>
              {/* </div> */}
            </Slider>
          </Tab>
          <Tab eventKey="profile" title="Japanese">
            <Slider {...settings}>
              <div>
                <LanguageCard />
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </Tab>
          <Tab eventKey="contact" title="Chinese  ">
            Details
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Languages;
