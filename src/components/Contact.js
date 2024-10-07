import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Feel free to reach out for any inquiries!</p>
      <form id="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;


