import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_c2os8hg',
      'template_ar8zz34',
      form.current,
      '0PaTnFFnZ49ST8od3'
    )
    .then((result) => {
      setStatus('success');
      form.current.reset();
    }, (error) => {
      setStatus('error');
    });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-heading">Get in Touch</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form card">
        <div className="form-group">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="user_message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="primary-button"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="error-message">Failed to send message. Please try again.</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
