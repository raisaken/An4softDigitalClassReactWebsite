import React from "react";

import { Container } from "react-bootstrap";

import "./Course.css";

import Footer from "../../Layouts/Footer/Footer";

import DigitalClassNavBar from "../../Layouts/Header/DigitalClassNavBar/DigitalClassNavBar";
import CourseDetailsRight from "../../components/Course/CourseDetailsRight/CourseDetailsRight";
import CourseDetailsLeft from "../../components/Course/CourseDetailsLeft/CourseDetailsLeft";

function Course() {
  return (
    <div className="Course">
      <DigitalClassNavBar />
      <div className="CourseDetails">
        <Container>
          <div className="CourseDetailsDesc">
            <div className="CourseDetailsLeft">
              <CourseDetailsLeft />
            </div>
            <div className={`CourseDetailsRight`}>
              <CourseDetailsRight />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Course;
