import React from "react";
import Aboutimage from '../assets/images/about.jpg';
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${Aboutimage})`}}></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          sequi debitis accusantium nostrum eius doloribus voluptatum nobis a
          sit perspiciatis, dolorum velit sed porro repellendus ut id voluptates
          officiis reprehenderit?
        </p>
      </div>
    </div>
  );
}

export default About;
