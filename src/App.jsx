import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
            <Route index path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
