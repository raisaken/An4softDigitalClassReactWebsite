import "./App.css";
import Body from "./Components/Body";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Course from "./Components/Course/Course";
import StikyTest from "./Components/Tests/StikyTest/StikyTest";
import VideoModelPreview from "./Components/Tests/VideoModelPreview/VideoModelPreview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/course" element={<Course />} />
        <Route path="/stiky" element={<StikyTest />} />
        <Route path="/preview" element={<VideoModelPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
