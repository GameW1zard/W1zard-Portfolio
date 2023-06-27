import React from "react";
import "../css/contact.css";

function Contact () {
    const text = "hello world this is the contact page";

    return (
        <div className="container">  
        <form id="contact" action="" method="post">
          <h3>Contact Me</h3>
          <h4>No timeframe Guarenteed for replys</h4>
          <fieldset>
            <input placeholder="Your name" type="text" tabIndex="1" required autoFocus></input>
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabIndex="2" required></input>
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your Message Here...." tabIndex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
       
        
      </div>
        )
}

export default Contact;