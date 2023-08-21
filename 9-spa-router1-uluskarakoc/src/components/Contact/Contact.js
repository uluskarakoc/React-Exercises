import React from "react";
import styles from "./contact.module.scss";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!name) {
      alert("write  name");
      isValid = false;
    } else if (!email) {
      alert("write email");
      isValid = false;
    } else if (!message) {
      alert("write email");
      isValid = false;
    } else if (message.length < 10 || message.length > 160) {
      alert("The message must be between 10 and 160 characters.");
      isValid = false;
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }
    if (isValid) {
      setName("");
      setMessage("");
      setEmail("");
      alert("thank you")
    }
  };
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          value={name}
          className="form"
          type="text"
          placeholder="Your Name"
          id="name"
          onChange={onChangeName}
        ></input>

        <label htmlFor="email">Your Email:</label>
        <input
          value={email}
          className="form"
          type="email"
          placeholder="Your Email"
          id="email"
          onChange={onChangeEmail}
        ></input>

        <label htmlFor="post">Write me:</label>
        <textarea
          value={message}
          className="form"
          name="postContent"
          id="post"
          
          onChange={onChangeMessage}
        />

        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

// Fatih karaca Code
// function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const onChangeInput = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let isValid = true;

//     if (!form.name || !form.email || !form.message) {
//       setError('Please fill in all fields.');
//       isValid = false;
//     } else if (!validateEmail(form.email)) {
//       setError('Please enter a valid email address.');
//       isValid = false;
//     } else if (form.message.length < 10 || form.message.length > 160) {
//       setError('The message must be between 10 and 160 characters.');
//       isValid = false;
//     }

//     if (isValid) {
//       setError('');
//       setSuccessMessage('Thanks for your message!');
//       setForm({ name: '', email: '', message: '' });
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 3000);
//     }
//   };
