import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Card,
  CardImg,
  Container,
  Tab,
  Tabs,
} from "react-bootstrap";
import Footer from "../Footer";
import Ratings from "../ReusableComponents/Ratings/Ratings";
import Rectangle1061 from "../../Pictures/Rectangle 1061.png";
import "./Course.css";
import DigitalclassNavbar from "../DigitalclassNavbar/DigitalclassNavbar";
import styled from "styled-components";
import Instructor from "../Instructor/Instructor";
import Mycard from "../Mycard";
import StudentsBoughtCard from "../StudentsBoughtCard/StudentsBoughtCard";
import ModalVideo from "react-modal-video";
import { FiYoutube } from "react-icons/fi";

const ModifiedRatings = styled(Ratings)`
  background-color: red;
  font-size: 10rem;
  font-weight: bold;
  color: black;
`;

function Course() {
  const [key, setKey] = useState("home");
  const text =
    "Science training is the instructing and learning of science to  non-researchers, for example, younger students, undergrads, or  grown-ups inside the overall population. The field of science  training remembers work for science content, science process  (the logical technique), some sociology, and some instructing  instructional method. The principles for science training give  desires to the advancement of comprehension for understudies  through the whole course of their K-12 instruction and past. The  customary subjects remembered for the measures are physical,  life, earth, space, and human sciences.";

  const [isOpen, setOpen] = useState(false);
  const [Showmore, setShowmore] = useState(false);


  // let listener = null;
  // const [scrollState, setScrollState] = useState("top");
  // console.log(scrollState, "From scrollState");

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   listener = document.addEventListener("scroll", (e) => {
  //     var scrolled = document.scrollingElement.scrollTop;
  //     if (scrolled >= 0) {
  //       if (scrollState !== "active") {
  //         setScrollState("active");
  //       }
  //     } else {
  //       if (scrollState !== "top") {
  //         setScrollState("top");
  //       }
  //     }
  //   });
  //   return () => {
  //     document.removeEventListener("scroll", listener);
  //   };
  // }, [scrollState]);
  return (
    <div className="Course">
      <DigitalclassNavbar />
      <div className="CourseDetails">
        <Container>
          <div className="CourseDetailsDesc">
            <div className="CourseDetailsLeft">
              <Breadcrumb className="CourseDetailsLeftBreadcrumb">
                <Breadcrumb.Item
                  href="#"
                  className="CourseDetailsLeftBreadcrumbItemA"
                >
                  Programming
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  active
                  className="CourseDetailsLeftBreadcrumbItemB"
                >
                  Node Js
                </Breadcrumb.Item>
              </Breadcrumb>
              <div className="Playbutton">
                <React.Fragment>
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                  />
                  {/* <FiYoutube
                  className="btn-primary"
                  onClick={() => setOpen(true)}
                  style={{ zIndex: "1", position: "absolute", top: "50px", left:"-50px" }}
                /> */}
                  <button className="btn-primary" onClick={() => setOpen(true)}>
                    VIEW DEMO
                  </button>
                </React.Fragment>
              </div>
              {/* <div>
                <ModifiedRatings>Modified Button</ModifiedRatings>
              </div> */}
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
              {/* -----------Description-------------------------------------------------- */}
              <div className="Description">Description</div>
              <div className="DescriptionDetails">
                {Showmore ? text : text.substring(0, 250)}
              </div>
              <div className="Onclickmore">
                <div
                  className="Showmore"
                  onClick={() => setShowmore(!Showmore)}
                >
                  {Showmore ? "Show Less " : "Show more"}
                </div>
              </div>
              {/* ----------Instructor------------------------------------------------- */}
              <div>
                <div>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 InstructorsTitle"
                  >
                    <Tab
                      eventKey="home"
                      title="Instructors"
                      className="InstructorsTitle"
                    >
                      <Instructor />
                    </Tab>
                    <Tab eventKey="profile" title="Curriculam">
                      <Instructor />
                    </Tab>
                    <Tab eventKey="contact" title="Reviews">
                      <Instructor />
                    </Tab>
                  </Tabs>
                </div>
              </div>
              {/* --------Students also bought-------------------------------------------  */}
              <div className="CourseDetailsStudents">
                <div className="CourseDetailsStudentsTitle">
                  Students also bought
                </div>
                <div className="CourseDetailsStudentsCards">
                  <StudentsBoughtCard />
                  <StudentsBoughtCard />
                  <StudentsBoughtCard />
                  <StudentsBoughtCard />
                </div>
              </div>
              {/* ------Feature Class--------------------------------------- */}
              <div className="FeatureClass">
                <div className="FeatureClassTitle">Feature Class</div>
                <div className="FeatureClassCards">
                  <Mycard />
                  <Mycard />
                  <Mycard />
                  <Mycard />
                </div>
              </div>
            </div>
            <div className={`CourseDetailsRight`}>
              <Card className="CourseDetailsRightCC"
                // className={`${
                //   scrollState === "active" ? "fixed" : ""
                // } CourseDetailsRightCC`}
              >
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
