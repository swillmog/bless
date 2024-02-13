import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact component={Home} />
        </Routes>
      </Router>
  );
}

export default App;