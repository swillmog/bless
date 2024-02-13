import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" >
          <Route index element = {<> <Navbar /> < Home /> </> } />
          <Route path="menu"  element = {<> <Navbar /> </> } />
          <Route path="about"  element = {<> <Navbar /> </> } />
          <Route path="contact"  element = {<> <Navbar /> </> } />
        </Route>
        
        </Routes>
      </Router>
  );
}

export default App;