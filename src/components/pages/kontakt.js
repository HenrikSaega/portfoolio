import React, { useState, useRef } from "react";
import OrButton from "../functions/ContactOrButton";
import "../styles/kontakt.css";
import emailjs from 'emailjs-com';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: ""
  });


  const formRef = useRef();


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };


  const emailRegex = /^[^\s@]+@([a-zA-Z0-9-]+\.)+(ee|eu|com|net|org)$/i;



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address ending!");
    return;
    }

    emailjs.sendForm(
      'service_ddpm0r9',
      'template_q1vpna5',
      formRef.current,
      'MilrnFaf8601J-Vgq'
    ).then((result) => {
      console.log(result.text);
      alert("Message sent!");
      setFormData({subject: "", name: "", email: "", message: "" });
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message.");
    });
  };

  return (
    <>
      <div className="kontakt-form-container">
        <h1>CONTACT</h1>
        <form ref={formRef} className="kontakt-form" onSubmit={handleSubmit}>
          <h2>CONTACT ME</h2>
          <input
            type="text"
            name="subject"
            placeholder="Your subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            type="message"
            rows="5"
            placeholder="Your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send message</button>
          <OrButton/>
        </form>
      </div>

      <footer className="footer">
        <p>&copy; 2025 All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Kontakt;
