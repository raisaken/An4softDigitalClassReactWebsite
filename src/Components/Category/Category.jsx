import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import Mycard from "../Mycard";
import MultilevelDropdownDigitalClass from "../ReusableComponents/NavbarDigitalClass/MultilevelDropdownDigitalClass/MultilevelDropdownDigitalClass";
import "./Category.css";

function Category() {
  return (
    <div className="Category">
      <MultilevelDropdownDigitalClass />
      <Container>
        <div className="CategoryContainer">
          <h1 className="CategoryTitle">Categories</h1>
          <div className="CategoryTitleCard">
            <Mycard />
            <Mycard />
            <Mycard />
            <Mycard />
            <Mycard />
            <Mycard />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Category;
