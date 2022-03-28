import React from "react";
import Footer from "../Footer/Footer";
import DigitalClassNavBar from "../Header/DigitalClassNavBar/DigitalClassNavBar";

const PublicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <DigitalClassNavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default PublicLayout;
