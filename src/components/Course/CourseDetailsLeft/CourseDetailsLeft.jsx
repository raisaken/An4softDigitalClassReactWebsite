import React, { useState } from "react";

import { Breadcrumb, Tab, Tabs } from "react-bootstrap";

import { IoMdContact } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

import { CourseData, StudentViewData } from "./Data";
import Ellipse6 from "../../../Assets/Images/Ellipse 6.png";
import Instructor from "../../Course/Instructor/Instructor";
import CourseCard from "../../Home/Courses/CourseCard/CourseCard";
import StudentsBoughtCard from "../../Home/StudentsBoughtCard/StudentsBoughtCard";

function CourseDetailsLeft() {
  const [key, setKey] = useState("home");
  const text =
    "Science training is the instructing and learning of science to  non-researchers, for example, younger students, undergrads, or  grown-ups inside the overall population. The field of science  training remembers work for science content, science process  (the logical technique), some sociology, and some instructing  instructional method. The principles for science training give  desires to the advancement of comprehension for understudies  through the whole course of their K-12 instruction and past. The  customary subjects remembered for the measures are physical,  life, earth, space, and human sciences.";

  const [Showmore, setShowmore] = useState(false);
  return (
    <div>
      {" "}
      <Breadcrumb className="CourseDetailsLeftBreadcrumb">
        <Breadcrumb.Item href="#" className="CourseDetailsLeftBreadcrumbItemA">
          Programming
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="CourseDetailsLeftBreadcrumbItemB">
          Node Js
        </Breadcrumb.Item>
      </Breadcrumb>
      <div>
        Learn Node JS for beginners and practice basic programming language from
        home with this basic online programming course.
      </div>
      <div className="CourseDetailsLeftstarrate">
        <div className="CourseDetailsLeftstarrateGroupA">
          4.7 <FaStar className="FaStar" />
          <FaStar className="FaStar" />
          <FaStar className="FaStar" />
          <FaStar className="FaStar" />
          <FaStar className="FaStar" />
        </div>
        <div className="CourseDetailsLeftstarrateGroupB">
          <AiFillEye />
          1000 view
        </div>
      </div>
      <div className="CourseDetailsLeftImgDesc">
        <div>
          <img
            src={Ellipse6}
            alt=""
            className="CourseDetailsLeftImgDescOnlyImg"
          />
        </div>
        <div>
          <div className="CourseDetailsLeftImgDescTitle">By Raju Hamal</div>
          <div className="CourseDetailsLeftImgDescDetails">
            More than 6 year of experience
          </div>
        </div>
      </div>
      <div className="CourseDetailsLeftIoMdContact">
        <IoMdContact className="CourseDetailsLeftIoMdContactGA" />
        1546 already enrolled
      </div>
      <div className="Preview">Preview this Course</div>
      <div className="PreviewItems">
        <div className="PreviewItemsDetails">
          ✓ 5 Introduction Of Plastic Its Use And Characteristics
        </div>
        <div className="PreviewItemsDetails">
          ✓ 5 Introduction Of Plastic Its Use And Characteristics
        </div>
        <div className="PreviewItemsDetails">
          ✓ 5 Introduction Of Plastic Its Use And Characteristics
        </div>
        <div className="PreviewItemsDetails">
          ✓ 5 Introduction Of Plastic Its Use And Characteristics
        </div>
      </div>
      {/* -----------Description-------------------------------------------------- */}
      <div className="Description">Description</div>
      <div className="DescriptionDetails">
        {Showmore ? text : text.substring(0, 250)}
      </div>
      <div className="Onclickmore">
        <div className="Showmore" onClick={() => setShowmore(!Showmore)}>
          {Showmore ? "Show Less " : "Show more"}
        </div>
      </div>
      {/* ----------Instructor------------------------------------------------- */}
      <div>
        <div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 InstructorsTitle"
          >
            <Tab
              eventKey="home"
              title="Instructors"
              className="InstructorsTitle"
            >
              <Instructor />
            </Tab>
            <Tab eventKey="profile" title="Curriculam">
              <Instructor />
            </Tab>
            <Tab eventKey="contact" title="Reviews">
              <Instructor />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* --------Students also bought-------------------------------------------  */}
      <div className="CourseDetailsStudents">
        <div className="CourseDetailsStudentsTitle">Students also bought</div>
        <div className="CourseDetailsStudentsCards">
          {StudentViewData.map((data) => {
            return (
              <StudentsBoughtCard
                key={data.id}
                course={data.course}
                author={data.author}
                views={data.views}
                price={data.price}
              />
            );
          })}
        </div>
      </div>
      {/* ------Feature Class--------------------------------------- */}
      <div className="FeatureClass">
        <div className="FeatureClassTitle">Feature Class</div>
        <div className="FeatureClassCards">
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
      </div>
    </div>
  );
}

export default CourseDetailsLeft;
