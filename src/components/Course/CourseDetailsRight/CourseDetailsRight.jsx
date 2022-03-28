import React from "react";
import { Card, CardImg, Container } from "react-bootstrap";
import Rectangle1061 from "../../../Assets/Images/Rectangle 1061.png";
import VideoModelPreview from "../VideoModelPreview/VideoModelPreview";

function CourseDetailsRight() {
  return (
    <div>
      <Card className="CourseDetailsRightCC">
        <div>
          <CardImg src={Rectangle1061} className="Rerightctangle1061"></CardImg>
        </div>
        <div className="CardVideoModelPreview">
          <div className="CardVideoModelPreviewRelative"></div>
          <VideoModelPreview className="CardVideoModelPreviewRelativemodal" />
        </div>
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
  );
}

export default CourseDetailsRight;
