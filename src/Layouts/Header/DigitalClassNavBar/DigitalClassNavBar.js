import React from "react";

import "./DigitalClassNavBar.css";

import { menuItems } from "./menuItems";
import SubMenuItems from "./SubMenuItems";

import logo from "../../../Assets/Images/office+logo 1.png";

import { Container, Navbar } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CustomNameInput } from "../../../components/Common/Fields/CustomInput/CustomInput";

function DigitalClassNavBar() {
  return (
    <div className="MultilevelDropdownDigitalClass">
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
          <CustomNameInput
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

export default DigitalClassNavBar;
