import "../styles/App.css";
import "../styles/Contact.css"
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3x9hnfr",        // Your Service ID
        "template_ma860rt",       // Your Template ID
        formData,
        "83evGML4UlSbE-fAJ"       // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Message failed to send. Please try again.");
        }
      );

    // Optional: clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-content">
      <h1>Contact.</h1>
      <p>
        Get in touch or shoot me an email directly at{" "}
        <strong>hellocodewonders@gmail.com</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default Contact;
