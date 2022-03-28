import React from "react";
import Vector3 from "../../../Assets/Images/Vector 3.png";
import Vector5 from "../../../Assets/Images/Vector 5.png";
import Rectangle1049 from "../../../Assets/Images/Rectangle 1049.png";
import Rectangle1048 from "../../../Assets/Images/Rectangle 1048.png";
import Rectangle1047 from "../../../Assets/Images/Rectangle 1047.png";
import { CourseData } from "./Data";
import CourseCard from "../CourseCard/CourseCard";
import { Container } from "react-bootstrap";

function Subscribed() {
  return (
    <div>
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
    </div>
  );
}

export default Subscribed;
