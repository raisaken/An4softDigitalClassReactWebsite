import React from "react";

import Vector3 from "../../Assets/Images/Vector 3.png";
import Vector5 from "../../Assets/Images/Vector 5.png";
import Rectangle1049 from "../../Assets/Images/Rectangle 1049.png";
import Rectangle1048 from "../../Assets/Images/Rectangle 1048.png";
import Rectangle1047 from "../../Assets/Images/Rectangle 1047.png";
import Female from "../../Assets/Images/Female-Student-PNG-Image 1.png";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Header.css";
import "./Dashboard.css";

import { CourseData } from "./Data";

import Footer from "../../Layouts/Footer/Footer";
import Courses from "../../Layouts/Courses/Courses";
import Levels from "../../Layouts/Levels/Levels";
import Languages from "../../Layouts/Languages/Languages";
import CourseCard from "../../Layouts/Courses/CourseCard/CourseCard";
import Preparation from "../../Layouts/Preparation/Preparation";
import Workshop from "../../Layouts/Workshop/Workshop";

import DigitalClassNavBar from "../../Layouts/Header/DigitalClassNavBar/DigitalClassNavBar";

function Dashboard() {
  return (
    <div className="mainBody">
      <DigitalClassNavBar />

      {/*  -----header starts--------------------------------------------------------*/}
      <div className="header">
        <Container>
          <div className=" headerbody">
            <div className="headerbodydesc">
              <div className="headerHeading">
                Find the best trainers and build your future
              </div>
              <div className="headerDesc">
                Choose from 183,000 online video courses with new additions
                published every month
              </div>
            </div>

            <div className="FemaleImg">
              <img src={Female} alt="" className="FemaleImgFemale" />
            </div>
          </div>
        </Container>
      </div>
      {/* -------header ends------------------------------------------------------------ */}
      <Courses />

      {/* --------<Workshop /> ----------------------------------------------------------*/}

      <Workshop />

      {/* ----------------------------------------------------------------------------- */}

      <Levels />

      {/* ----------TestTab------------------------------------------------------------- */}
      {/* <TestTab/> */}
      {/* --------Popular languages----------------------------------------------------------------------- */}

      <Languages />

      {/* ------PreparationCard--------------------------------------------------------------------------------------- */}
      <Preparation />

      {/* --------------------------------------------------------------------------- */}
      <Container className="SubscribedClass">
        <div className="MostClass">Most Subscribed Classs</div>
        <div className="SubscribedClassCard">
          {CourseData.map((data) => {
            return (
              <CourseCard
                img1={data.img1}
                img2={data.img2}
                img3={data.img3}
                title={data.title}
                author={data.title}
                views={data.views}
              />
            );
          })}
        </div>
      </Container>
      {/* -------------------------------------------------------------------------------------- */}
      <div className="Learnany">
        <Container className="LearnanyDetails">
          <div className="LearnanyGroupA">
            <div className="LearnanyTitle"> Learn anytime, anywhere</div>
            <div className="LearnanyDesc">
              Propel your career, get a degree, or expand your knowledge at any
              time anywhere
            </div>
            <button className="LearnanyButton">Find out how</button>
          </div>
          <div className="LearnanyGroupB">
            {/* <div className="Rec1"> */}
            <img src={Rectangle1047} alt="" className="Rec1ImgA" />
            {/* </div> */}
            {/* <div className="Rec2"> */}
            <img src={Rectangle1049} alt="" className="Rec1ImgB" />
            {/* </div> */}
            {/* <div className="Rec3"> */}
            <img src={Rectangle1048} alt="" className="Rec1ImgC" />
            {/* </div> */}
          </div>
        </Container>
      </div>
      <div className="interested">
        <Container>
          <div className="interesteddiv">
            <div className="interesteddivImg">
              <div className="interestedRelative"></div>
              <img src={Vector5} className="vector1" alt="" />
              <img src={Vector5} className="vector2" alt="" />
              <img src={Vector3} className="vector3" alt="" />
            </div>

            <div className="interestedCol">
              <div className="interestedColTitle">
                Interested in becoming a <br /> teacher with edigital class?
              </div>
              <div className="interestedColDesc">
                We are recruiting more tutors.
              </div>
              <button className="interestedColBut">Apply for teach</button>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
