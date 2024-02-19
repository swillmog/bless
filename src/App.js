import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";



function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" >
          <Route index element = {<> <Navbar /> < Home /> <Footer /></> } />
          <Route path="Menu"  element = {<> <Navbar /> < Menu /> <Footer /></> } />
          <Route path="About"  element = {<> <Navbar /> < About /> <Footer /></> } />
          <Route path="Contact"  element = {<> <Navbar /> < Contact /> <Footer /></> } />
        </Route>
             </Routes>
      </Router>
  );
}

export default App;