import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import BgImage from "../assets/pizza.jpeg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BgImage})`}}> 
      <div className="headerContainer">
        <h1> Swill Meals </h1>
        <p> Always a great Taste! </p>
        <Link to="/menu"> 
        <button> ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;