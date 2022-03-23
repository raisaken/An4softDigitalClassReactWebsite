import "./App.css";
import Body from "./Components/Body";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Course from "./Components/Course/Course";
import StikyTest from "./Components/Tests/StikyTest/StikyTest";
import VideoModelPreview from "./Components/Tests/VideoModelPreview/VideoModelPreview";
import Category from "./Components/Category/Category";
import Todos from "./Components/Todos/Todos";
import TodosItem from "./Components/Todos/TodosItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/An4softDigitalClassReactWebsite" element={<Body />} />
        <Route path="/course" element={<Course />} />
        <Route path="/stiky" element={<StikyTest />} />
        <Route path="/preview" element={<VideoModelPreview />} />
        <Route path="/category" element={<Category />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<TodosItem />} />
      </Routes>
    </Router>
  );
}

export default App;
