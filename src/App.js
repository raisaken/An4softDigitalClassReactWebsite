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
        <Route path="/categories" element={<Categories/>} />
         <Route path="/course" element={<Course />} />

        {/*<Route path="/stiky" element={<StikyTest />} />
        <Route path="/preview" element={<VideoModelPreview />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:id" element={<TodosItem />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
