import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Course from "./Pages/Course/Course";
import Categories from "./Pages/Categories/Categories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </Router>
  );
}

export default App;
