import React from "react";
import Aboutimage from "../assets/images/about.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aboutimage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <div className="aboutContent">
          <p>
            Welcome to Savory Haven, where culinary artistry meets warm
            hospitality. Founded in 2010, our restaurant is built on the belief
            that great food brings people together. We source the freshest local
            ingredients to create innovative dishes that honor traditional
            flavors while embracing modern techniques.
          </p>
          <p>
            Our chef brings 20 years of international experience to your plate,
            crafting each meal with passion and precision. At Savory Haven,
            we're not just serving food - we're creating memorable dining
            experiences in an atmosphere that feels like home.
          </p>
          <p>
            Committed to sustainability, we partner with local farmers and
            purveyors who share our values of quality and environmental
            responsibility. Join us for a meal and become part of our story.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
