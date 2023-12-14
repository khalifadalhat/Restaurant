import React from "react";
import Chef from "../assets/images/chef.png";
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Chef})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="post">
          <label htmlFor="name">FullName</label>
          <input type="text" name="name" placeholder="Enter Name..." />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter email..." />

          <label htmlFor="message">Meassage</label>
          <textarea
            name="message"
            placeholder="Enter a Message..."
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
