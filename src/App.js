import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">

<Router>
        <Routes>
        <Route path="/" >
          <Route index element = {<> <Navbar /> < Home /> </> } />
          <Route path="menu"  element = {<> <Navbar /> </> } />
          <Route path="about"  element = {<> <Navbar /> </> } />
          <Route path="contact"  element = {<> <Navbar /> </> } />
        </Route>
       </Routes>
       <Footer/>
      </Router>
  
    </div>
  );
}

export default App;