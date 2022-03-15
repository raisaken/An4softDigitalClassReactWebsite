import React from "react";
import { Breadcrumb, Card, CardImg, Container } from "react-bootstrap";
import Footer from "../Footer";
import Rectangle1061 from "../../Pictures/Rectangle 1061.png";
import "./Course.css";
import DigitalclassNavbar from "../DigitalclassNavbar/DigitalclassNavbar";

function Course() {
  return (
    <div className="Course">
      <DigitalclassNavbar />
      <div className="CourseDetails">
        <Container>
          <div className="CourseDetailsDesc">
            <div className="CourseDetailsLeft">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Programming</Breadcrumb.Item>
                <Breadcrumb.Item active>Node Js</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="CourseDetailsRight">
              <Card className="CourseDetailsRightCC">
                <CardImg src={Rectangle1061}></CardImg>
                <div className="CourseDetailsRightC">
                <Container className="CourseDetailsRightContainer">
                  <div className="CourseDetailsRightPrice">Rs. 500.00</div>
                  <div className="CourseDetailsRightoff">
                    <div className="CourseDetailsRightoffprice">Rs. 300.00</div>
                    <div className="CourseDetailsRightoffoff">25% off</div>
                  </div>
                  <button className="BuyNow">Buy Now</button>
                  <button className="AddtoCart">Add to Cart</button>
                  <div className="CourseInfo">
                    <p className="CourseInfotitle">Course information:</p>
                    <p className="CourseInfoItem">✓ Duration: 1h 11m</p>
                    <p className="CourseInfoItem">✓ 10 Videos</p>
                    <p className="CourseInfoItem">✓ Specialized learning</p>
                    <p className="CourseInfoItem">✓ 1 Attachment</p>
                    <p className="CourseInfoItem">✓ Introductory level</p>
                    <p className="CourseInfoItem">✓ Teacher Support</p>
                    <p className="CourseInfoItem">✓ Get certified when finished</p>
                  </div>
                </Container>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Course;
