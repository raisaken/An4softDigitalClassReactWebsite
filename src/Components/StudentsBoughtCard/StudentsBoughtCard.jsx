import React from "react";
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import './StudentsBoughtCard.css'

function StudentsBoughtCard() {
  return (
    <>
      <div className="StudentsBoughtCard">
        <div className="StudentsBoughtCardbackground"></div>
        <div className="StudentsBoughtCardDesc">
          <div className="StudentsBoughtCardDescTitle">Flutter</div>
          <div className="StudentsBoughtCardDescname">By Ramesh Hamlal</div>
          <div className="StudentsBoughtCardDescRank">
            4.7
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
            <AiFillEye />
            1000 View
          </div >
          <div className="StudentsBoughtCardDescSeller">Best seller</div>
        </div>
        <div className="StudentsBoughtCardPrice" >
          Rs. <br />
          500.00
        </div>
      </div>
    </>
  );
}

export default StudentsBoughtCard;
