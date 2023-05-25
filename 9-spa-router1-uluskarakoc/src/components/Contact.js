import React from "react";

function Contact() {
  return (
    <div className="navText">
      <h2>Contact Me</h2>
      <form>
        <input className="form" type="text" placeholder="Your Name" ></input>

        <input className="form" type="che" placeholder="Your Email"></input>

        <textarea className="form" name="postContent" rows={4} cols={40} placeholder="Write Me"/>

        <button >Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
