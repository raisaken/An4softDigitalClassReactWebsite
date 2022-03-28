  import React from "react";
import { FaStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import "./StudentsBoughtCard.css";

function StudentsBoughtCard({ course, author, views, price}) {
  return (
    <>
      <div className="StudentsBoughtCard">
        <div className="StudentsBoughtCardDesc">
          <div className="StudentsBoughtCardDescPrice">
            <div className="StudentsBoughtCardbackground"></div>

            <div className="StudentsBoughtCardDescDetails">
              <div className="StudentsBoughtCardDescTitle">{course}</div>

              <div className="StudentsBoughtCardfinal">
                <div>
                  <div className="StudentsBoughtCardDescname">
                   {author}
                  </div>
                  <div className="StudentsBoughtCardDescRank">
                    4.7
                    <FaStar className="FaStar" />
                    <FaStar className="FaStar" />
                    <FaStar className="FaStar" />
                    <FaStar className="FaStar" />
                    <FaStar className="FaStar" />
                    <AiFillEye />
                    {views} View
                  </div>
                </div>
                <div className="StudentsBoughtCardPrice">Rs. {price}</div>
              </div>
              <div className="StudentsBoughtCardDescSeller">Best seller</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentsBoughtCard;
