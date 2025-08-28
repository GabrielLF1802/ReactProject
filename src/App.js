import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/pages/layout/Container";
import Navbar from "./components/pages/layout/Navbar";
import Footer from "./components/pages/layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route element={<Container customClass="min-height"/>}>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/projects" element={<Projects/>}>
          </Route>
          <Route exact path="/company" element={<Company/>}>
          </Route>
          <Route exact path="/contact" element={<Contact/>}>
          </Route>
          <Route exact path="/newproject" element={<NewProject/>}>
          </Route>
        </Route>
      </Routes>
      <Footer/>




    </Router>
  );
}

export default App;
