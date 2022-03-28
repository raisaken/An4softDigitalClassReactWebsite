import React from "react";

import Ellipse11 from "../../../Assets/Images/Ellipse 11.png";

import { FaStar } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiFillMail } from "react-icons/ai";

import "./Instructor.css";
function Instructor() {
  return (
    <div>
      <div className="InstructorDetails">
        <img src={Ellipse11} alt=""  className="InstructorDetailsImg"/>
        <div className="InstructorDetailsDesc">
          <div className="InstructorDetailsTitle">Instructors</div>
          <div className="InstructorDetailsName">Ranju Hamal</div>
          <div className="InstructorDetailsDesc1">
            Professor of Computer programming
          </div>
        </div>
      </div>
      <div className="InstructorRatings">
        <div>
          4.7
          <FaStar className="FaStar" />
          <FaStar className="FaStar" />
          <FaStar className="FaStar" />
          <FaStar className="FaStar" />
          <FaStar className="FaStar" />
        </div>
        <div className="InstructorRatingsItem">
          <div className="InstructorRatingsItem1">
            01
            <FaYoutube />
          </div>
          <div className="InstructorRatingsItem2">Courses</div>
        </div>
        <div>
          <div className="InstructorRatingsItem1">
            55
            <BsPeopleFill />
          </div>
          <div className="InstructorRatingsItem2">Student</div>
        </div>
        <div>
          <div className="InstructorRatingsItem1">
            79
            <MdRateReview />
          </div>
          <div className="InstructorRatingsItem2">Reviews</div>
        </div>
      </div>
      <div className="InstructorContact">
        <div className="InstructorContactGroupA">Contact info</div>
        <div className="InstructorContactGroupB">
          <div className="InstructorContactGroupBItem">
            <GoLocation className="InstructorContactGroupBItemIcon" />{" "}
            Anamnagar, Kathmandu
          </div>

          <div className="InstructorContactGroupBItem">
            <AiFillMail className="InstructorContactGroupBItemIcon" />{" "}
            info@edigitalclass.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
