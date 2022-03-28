import React from "react";
import { Container } from "react-bootstrap";

import DigitalClassNavBar from "../../Layouts/DigitalClassNavBar/DigitalClassNavBar";
import Footer from "../../Layouts/Footer/Footer";
import CourseCard from "../../Layouts/Courses/CourseCard/CourseCard";

import "./Categories.css";

import { Data } from "../../Layouts/Courses/Data";

function Categories() {
  return (
    <>
      <div className="Category">
        <DigitalClassNavBar />
        <Container>
          <div className="CategoryContainer">
            <h1 className="CategoryTitle">Categories</h1>
            <div className="CategoryTitleCard">
              {Data.map((data) => {
                return (
                  <CourseCard
                    key={data.id}
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
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Categories;
