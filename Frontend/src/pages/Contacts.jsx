import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import '../styles/Contact.css';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      axios
      .post('https://portfolio-website-eight-theta-75.vercel.app/portfolio/users/post', { name, email, message })
      .then((res) => {
        // Show success message
        alert('Your message has been sent successfully. We will contact you shortly!');
        // Clear form after submission
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(err=>console.log('Error in posting the data',err))
  };

  return (
    <div className='contact-container'>
      <h2 className='contact-heading'>Contact Me</h2>
      <form className='form-container' onSubmit={handleSubmit}>
        <div>
          <label style={{ color: 'orange' }} htmlFor='name'>
            Enter your Name:
          </label>
          <input
            placeholder='Name here'
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label style={{ color: '#4B0082' }} htmlFor='email'>
            Enter your Email:
          </label>
          <input
            placeholder='Email here'
            type='email' // changed type to 'email' for better validation
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label style={{ color: '#4B0082' }} htmlFor='message'>
            Message:
          </label>
          <textarea
            placeholder='Message here'
            id='message'
            rows='5'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
