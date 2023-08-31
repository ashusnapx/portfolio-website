import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [ isMessageSent, setMessageSent ] = useState( false );

  const sendEmail = ( e ) => {
    e.preventDefault();

    emailjs.sendForm( 'service_p2yaaj4', 'template_cxndmkf', form.current, 'JgEYCSSohQj6br73X' )
      .then( ( result ) => {
        console.log( result.text );
        setMessageSent( true );
        form.current.reset(); // Reset the form

        setTimeout( () => {
          setMessageSent( false ); // Hide the success message after 3 seconds (adjust as needed)
        }, 3000 ); // Adjust the timeout value as needed
      } )
      .catch( ( error ) => {
        console.log( error.text );
      } );
  };

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center py-10 md:py-20 overflow-hidden">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-2 text-black">
        <div className="bg-white p-6 md:p-8 rounded-md shadow-md text-black mx-2">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-black">Contact Me</h1>
          {isMessageSent && (
            <p className="text-green-500 mb-4">Message sent successfully!</p>
          )}
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Your Name</label>
              <input type="text" id="name" name="from_name" className="w-full border rounded p-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input type="email" id="email" name="from_email" className="w-full border rounded p-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">Your Message</label>
              <textarea id="message" name="message" className="w-full border rounded p-2 h-32 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-1 mt-10 md:mt-0">
        <div className="flex flex-col items-center">
          <img src="https://i.postimg.cc/cJTfDJ2k/Profile-picture-3.png" alt="Ashutosh Kumar" className="rounded-full h-48 w-48 md:h-96 md:w-96 mb-4 object-cover hover:grayscale" />
          <h1 className="text-3xl md:text-4xl text-gray-400 font-bold mb-3">Ashutosh Kumar</h1>
          <p className="text-gray-600 font-light text-lg md:text-2xl text-center md:text-left">Made with ❤️ by Ashutosh Kumar</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
