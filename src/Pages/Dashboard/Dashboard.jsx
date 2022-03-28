import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import "./Dashboard.css";
import Courses from "../../components/Home/Courses/Courses";
import Levels from "../../components/Home/Levels/Levels";
import Languages from "../../components/Home/Languages/Languages";
import Preparation from "../../components/Home/Preparation/Preparation";
import Workshop from "../../components/Home/Workshop/Workshop";
import PublicLayout from "../../Layouts/PublicLayout/PublicLayout";
import Banner from "../../components/Home/Banner";
import Subscribed from "../../components/Home/Subscribed/Subscribed";

function Dashboard() {
  return (
    <div className="mainBody">
      <PublicLayout>
        <Banner />
        <Courses />
        <Workshop />
        <Levels />
        <Languages />
        <Preparation />
        <Subscribed />
      </PublicLayout>
    </div>
  );
}

export default Dashboard;
