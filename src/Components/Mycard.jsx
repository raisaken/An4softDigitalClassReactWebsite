import React from "react";
import Rectangle964 from "../Pictures/Rectangle 964.png";
import Rectangle968 from "../Pictures/Rectangle 968.png";
import Vector4 from "../Pictures/Vector (4).png";
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function Mycard() {
  return (
   
      <Card className="Mycard">
        <Card.Img className="CardImgMain" src={Rectangle964} />
        <Card.Img className="CardImgTransparent" src={Rectangle968} />
        <div className="CardDesc">
          <div className="CardDescTitle">Node js and flutter</div>
          <div className="CardDescAuthor">By Raju Hamal</div>
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
                <img src={Vector4} className="cardDescView" alt="" />
              </div>
              <div className="CardDescRankViewItem">1000 View</div>
            </div>
          </div>
        </div>
      </Card>
   
  );
}

export default Mycard;
