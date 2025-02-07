import React, { useState } from "react";

const Contact = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Hantera ändringar i formulärfält
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Skicka formulärdata till App.js via props
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData); // Skicka data till App.js
    setFormData({ name: '', email: '', message: '' }); // Återställ formuläret
  };

  return (
    <div className="contact">
      <header>
        <h1>Kontakt</h1>
      </header>

      <section>
        <h2>Hitta mig här:</h2>
        <p>Jag finns på följande plattformar:</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/emil-asikainen-45328a281/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/snickerio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        
        {/* Kontaktformulär */}
        <h2>Skicka mig ett meddelande: (Under utveckling, den gör inget just nu)</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Fullt namn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">E-postadress:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="message">Meddelande:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Skicka</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Emil Esa-Pekka Asikainen. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
};

export default Contact;
