import React from "react";
import "./MultilevelDropdownDigitalClass.css";
import { menuItems } from "./menuItems";
import SubMenuItems from "./SubMenuItems";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../../../Pictures/office+logo 1.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// const dropdownA = {
//   position: "absolute",
//   left: "100%",
//   top: "-7px",
// };
// const dropdownB = {
//   position: "absolute",
//   right: "100%",
// };

function MultilevelDropdownDigitalClass() {
  return (
    <div
      // style={window.innerWidth >= 410 ? dropdownA : dropdownB}
      className="MultilevelDropdownDigitalClass"
    >
      <Container className="MultilevelDropdownDigitalClassContainer">
        <div className="navbarLogo">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
        </div>
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <SubMenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
        </nav>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Graphic illustration"
            className="input"
          />
          <FaSearch className="searchIcon" />
        </div>
        <div className="navbuttons">
          <div className="navbuttonsRegister">
            <button className="navbuttonsRegisterButton">Register</button>
          </div>

          <div className="navbuttonsLogin">
            <button className="navbuttonsLoginButton">Log in</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MultilevelDropdownDigitalClass;
