import React from "react";
import { Breadcrumb, Card, CardImg, Container } from "react-bootstrap";
import Footer from "../Footer";
import Ratings from "../ReusableComponents/Ratings/Ratings";
import Rectangle1061 from "../../Pictures/Rectangle 1061.png";
import "./Course.css";
import DigitalclassNavbar from "../DigitalclassNavbar/DigitalclassNavbar";
import styled from "styled-components";

const ModifiedRatings = styled(Ratings)`
  background-color: red;
  font-size: 10rem;
  font-weight: bold;
  color: black;
`;

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
              <div>
                <ModifiedRatings>Modified Button</ModifiedRatings>
              </div>
              <div className="Preview">Preview this Course</div>
              <div className="PreviewItems">
                <div>
                  ✓ 5 Introduction Of Plastic Its Use And Characteristics
                </div>
                <div>
                  ✓ 5 Introduction Of Plastic Its Use And Characteristics
                </div>
                <div>
                  ✓ 5 Introduction Of Plastic Its Use And Characteristics
                </div>
                <div>
                  ✓ 5 Introduction Of Plastic Its Use And Characteristics
                </div>
              </div>
              <div className="Description">Description</div>
              <div className="DescriptionDetails">
                Science training is the instructing and learning of science to
                non-researchers, for example, younger students, undergrads, or
                grown-ups inside the overall population. The field of science
                training remembers work for science content, science process
                (the logical technique), some sociology, and some instructing
                instructional method. The principles for science training give
                desires to the advancement of comprehension for understudies
                through the whole course of their K-12 instruction and past. The
                customary subjects remembered for the measures are physical,
                life, earth, space, and human sciences.
              </div>
              <div className="Showmore">Show more</div>
            </div>

            <div className="CourseDetailsRight">
              <Card className="CourseDetailsRightCC">
                <CardImg src={Rectangle1061}></CardImg>
                <div className="CourseDetailsRightC">
                  <Container className="CourseDetailsRightContainer">
                    <div className="CourseDetailsRightPrice">Rs. 500.00</div>
                    <div className="CourseDetailsRightoff">
                      <div className="CourseDetailsRightoffprice">
                        Rs. 300.00
                      </div>
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
                      <p className="CourseInfoItem">
                        ✓ Get certified when finished
                      </p>
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
