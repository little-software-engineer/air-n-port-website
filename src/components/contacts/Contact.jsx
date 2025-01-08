import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="info">
          <h2>Our Address</h2>
          <p>123 Aviation Street</p>
          <p>Los Angeles, CA, 90045</p>
          <h2>Email</h2>
          <p>
            <a href="mailto:info@bojanaport.com">info@bojanaport.com</a>
          </p>
          <h2>Phone</h2>
          <p>+1 (310) 555-1234</p>
        </div>
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345096477!2d-122.41941508468388!3d37.77492977975981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f6c5c3e1%3A0x2a084f73f5d5bb92!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1614378574812!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
