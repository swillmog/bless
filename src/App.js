import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
     
      </Router>
      </div>
  );
}

export default App;
