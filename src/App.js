import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Course from "./Components/Course/Course";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/course" element={<Course />}/>
      </Routes>
    </Router>
  );
}

export default App;
