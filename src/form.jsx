import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling logic here
    // You can access the form data in the respective state variables (name, email, enquiryType, message)
    // For example: console.log(name, email, enquiryType, message);
  };

  return (
    <>
      <h2
        style={{
          color: 'white',
          textAlign: 'left',
          fontSize: '44px',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        Contact Us
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%' }} // Add consistent width style
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%' }} // Add consistent width style
          />
        </div>
        <div>
          <label htmlFor="enquiryType">Type of Enquiry:</label>
          <select
            id="enquiryType"
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value)}
            required
            style={{ width: '100%', height: '40px', borderRadius:'5px' }} // Add consistent width style
          >
            <option value="">Select an option</option>
            <option value="freelanceprojectproposal">
              Freelance Project Proposal
            </option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '100%' }} // Add consistent width style
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContactForm;
