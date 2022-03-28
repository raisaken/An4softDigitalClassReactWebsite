import React from "react";
import Rectangle964 from "../Pictures/Rectangle 964.png";
import Rectangle968 from "../Pictures/Rectangle 968.png";
import Star from "../Pictures/Star 1.png";
import Vector4 from "../Pictures/Vector (4).png";
import { Card, Col, Row } from "react-bootstrap";
import "./Class.css";

function Class() {
  return (
    <div className="cards">
      <Card className="SingleCard">
        <Card.Img className="CardImgMain" src={Rectangle964} />
        <Card.Img className="CardImgTransparent" src={Rectangle968} />
        <div className="CardDesc">
          <div className="CardDescTitle">Node js and flutter</div>
          <div className="CardDescAuthor">By Raju Hamal</div>
          <div className="CardDescRank">
            <Row>
              <Col>
                4.7
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
              </Col>
              <Col>
                <img src={Vector4} className="cardDescView" alt="" />
                1000 View
              </Col>
            </Row>
          </div>
        </div>
      </Card>
      <Card className="SingleCard">
        <Card.Img className="CardImgMain" src={Rectangle964} />
        <Card.Img className="CardImgTransparent" src={Rectangle968} />
        <div className="CardDesc">
          <div className="CardDescTitle">Node js and flutter</div>
          <div className="CardDescAuthor">By Raju Hamal</div>
          <div className="CardDescRank">
            <Row>
              <Col>
                4.7
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
              </Col>
              <Col>
                <img src={Vector4} className="cardDescView" alt="" />
                1000 View
              </Col>
            </Row>
          </div>
        </div>
      </Card>
      <Card className="SingleCard">
        <Card.Img className="CardImgMain" src={Rectangle964} />
        <Card.Img className="CardImgTransparent" src={Rectangle968} />
        <div className="CardDesc">
          <div className="CardDescTitle">Node js and flutter</div>
          <div className="CardDescAuthor">By Raju Hamal</div>
          <div className="CardDescRank">
            <Row>
              <Col>
                4.7
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
              </Col>
              <Col>
                <img src={Vector4} className="cardDescView" alt="" />
                1000 View
              </Col>
            </Row>
          </div>
        </div>
      </Card>
      <Card className="SingleCard">
        <Card.Img className="CardImgMain" src={Rectangle964} />
        <Card.Img className="CardImgTransparent" src={Rectangle968} />
        <div className="CardDesc">
          <div className="CardDescTitle">Node js and flutter</div>
          <div className="CardDescAuthor">By Raju Hamal</div>
          <div className="CardDescRank">
            <Row>
              <Col>
                4.7
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
                <img src={Star} className="cardDescStar" alt="" />
              </Col>
              <Col>
                <img src={Vector4} className="cardDescView" alt="" />
                1000 View
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Class;
