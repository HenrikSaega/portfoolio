import React, { useState, useRef } from "react";
import DirectEmailText from "../utils/DirectEmailText";
import "../styles/contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: ""
  });

  const formRef = useRef();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };


  const emailRegex = /^[^\s@]+@([a-zA-Z0-9-]+\.)+(ee|eu|com|net|org)$/i;



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
    setErrorMsg("Please emter a valid email address ending!");
    setSuccessMsg("");
    setTimeout(() => setErrorMsg(""), 5000);
    return;
    }

    emailjs.sendForm(
      'service_ddpm0r9',
      'template_q1vpna5',
      formRef.current,
      'MilrnFaf8601J-Vgq'
    ).then((result) => {
      console.log(result.text);
      setSuccessMsg("Message sent!");
      setErrorMsg("");
      setFormData({subject: "", name: "", email: "", message: "" });
      setTimeout(() => setSuccessMsg(""), 5000);
    }, (error) => {
      console.log(error.text);
      setErrorMsg("Failed to send message.");
      setSuccessMsg("");
      setTimeout(() => setErrorMsg(""), 5000);
    });
  };

  return (
    <>
      <div className="kontakt-form-container">
        <h1 className="no-select">CONTACT ME</h1>
        <form ref={formRef} className="kontakt-form" onSubmit={handleSubmit}>
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

          {successMsg && <div className="success-message">{successMsg}</div>}
          {errorMsg && <div className="error-message">{errorMsg}</div>}
          <DirectEmailText/>
        </form>
      </div>

      <footer className="footer">
        <p>&copy; 2025 All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Contact;
