import React from "react";

import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./CourseCard.css";


function CourseCard({title,author,img1,img2,img3, views}) {
  return (
    <Card className="Mycard">
      <Card.Img className="CardImgMain" src={img1} />
      <Card.Img className="CardImgTransparent" src={img2} />
      <div className="CardDesc">
        <div className="CardDescTitle">{title}</div>
        <div className="CardDescAuthor">{author}</div>
        <div className="CardDescRank">
          <div className="CardDescRankStar">
            4.7
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
            <FaStar className="FaStar" />
          </div>
          <div className="CardDescRankView">
            <div className="CardDescRankViewItem">
              <img src={img3} className="cardDescView" alt="" />
            </div>
            <div className="CardDescRankViewItem">{views} View</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CourseCard;
