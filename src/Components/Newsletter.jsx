// Newsletter.jsx

import React from "react";
import message from "../images/message.png";
function Newsletter() {
  return (
    <section id="newsletter" className="pt-5">
      <div className="container12">
        <div className="hero">
          <h3>Our brand is new<br />Website Is live!</h3>
          <p>Subscribe to our newsletter</p>
          <div id="Newsletter-form">
            <div className="Newsletter-form">
          <form>
            <input type="email" name="Email" placeholder="Your E-mail" required />
            <button type="submit">
              <img src={message} alt="Submit" width="30px" />
            </button>
          </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
