import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa'; // Importing icons for each input

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Added phone state
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle contact form logic
    alert(`Message sent: ${message}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Name Input */}
        <div className="flex items-center border mb-2 p-1 rounded">
          <FaUser className="text-gray-500" />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-none p-2 w-full"
            required
          />
        </div>
        {/* Email Input */}
        <div className="flex items-center border mb-2 p-1 rounded">
          <FaEnvelope className="text-gray-500" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none p-2 w-full"
            required
          />
        </div>
        {/* Phone Input */}
        <div className="flex items-center border mb-2 p-1 rounded">
          <FaPhone className="text-gray-500" />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-none p-2 w-full"
            required
          />
        </div>
        {/* Message Textarea */}
        <div className="flex items-start border mb-4 p-1 rounded">
          <FaComment className="text-gray-500" />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-none p-2 w-full"
            rows="4" // Set rows for textarea
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
