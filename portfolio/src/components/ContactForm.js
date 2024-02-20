import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setEmailValid] = useState(true);
    const [isMessageValid, setMessageValid] = useState(false);
    const [isSubmissionSuccessful, setSubmissionSuccessful] = useState(false);

  const showToast = (message) => {
    toast(message);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setEmailValid(true);
    setMessageValid(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageValid(e.target.value.length >= 10);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!isEmailValid || !isMessageValid) {
      showToast('Please fill out the form correctly.');
      return;
    }

    try {
      await emailjs.sendForm(
        'service_p2yaaj4',
        'template_cxndmkf',
        form.current,
        'JgEYCSSohQj6br73X'
      );
setSubmissionSuccessful(true);
      showToast(`Thanks ${name} for your query. Your query is: ${message}`);

      form.current.reset();
      setName('');
      setEmail('');
      setMessage('');
      setEmailValid(true);
      setMessageValid(false);
    } catch (error) {
      console.error(error.text);
      showToast('An error occurred. Please try again later.');
    }
  };

  return (
    <form
      className='space-y-4'
      ref={form}
      onSubmit={sendEmail}
      aria-labelledby='contact-form-title'
    >
      <div>
        <label htmlFor='name' className='block font-semibold mb-1'>
          Your Name
        </label>
        <input
          type='text'
          id='name'
          name='from_name'
          value={name}
          onChange={handleNameChange}
          className={`w-full border rounded p-2 focus:outline-none ${
            isEmailValid ? 'border-blue-500' : 'border-red-500'
          }`}
          aria-invalid={!isEmailValid}
          aria-describedby={!isEmailValid ? 'email-error' : undefined}
        />
      </div>
      {!isEmailValid && (
        <p id='email-error' className='text-red-500 mt-2' role='alert'>
          Please enter a valid email address
        </p>
      )}
      <div>
        <label htmlFor='email' className='block font-semibold mb-1'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='from_email'
          value={email}
          onChange={handleEmailChange}
          className={`w-full border rounded p-2 focus:outline-none ${
            isEmailValid ? 'border-blue-500' : 'border-red-500'
          }`}
          aria-invalid={!isEmailValid}
          aria-describedby={!isEmailValid ? 'email-error' : undefined}
        />
      </div>
      {!isEmailValid && (
        <p id='email-error' className='text-red-500 mt-2' role='alert'>
          Please enter a valid email address
        </p>
      )}
      <div>
        <label htmlFor='message' className='block font-semibold mb-1'>
          Your Message
        </label>
        <textarea
          id='message'
          name='message'
          value={message}
          onChange={handleMessageChange}
          className={`w-full border rounded p-2 h-32 focus:outline-none ${
            isMessageValid ? 'border-blue-500' : 'border-black'
          }`}
          aria-invalid={!isMessageValid}
          aria-describedby={!isMessageValid ? 'message-error' : undefined}
        />
      </div>
      {!isMessageValid && (
        <p id='message-error' className='text-black mt-2' role='alert'>
          Please enter a message with at least 10 characters
        </p>
      )}
      <button
        type='submit'
        onClick={sendEmail}
        disabled={!isMessageValid}
        className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none ${
          isMessageValid ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
        }`}
      >
        Send
      </button>
      {isSubmissionSuccessful ? (
        <p className='text-green-500 mt-2' role='alert'>
          Thank you for your message! We'll get back to you soon.
        </p>
      ) : null}
    </form>
  );
};

export default ContactForm;
