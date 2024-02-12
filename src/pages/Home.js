import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home"> 
      <div className="headerContainer">
        <h1> Swill Hats </h1>
        <p> Kings always on CROWN </p>
        <Link to="/menu"> 
        <button> ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;