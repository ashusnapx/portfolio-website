import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { LucideGithub, LucideInstagram, LucideLinkedin, LucideTwitter } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [ name, setName ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ message, setMessage ] = useState( '' );
  const [ isEmailValid, setEmailValid ] = useState( true );
  const [ isMessageValid, setMessageValid ] = useState( false );

  const showToast = ( message ) => {
    toast( message );
  };

  const validateEmail = ( email ) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test( email );
  };

  const handleNameChange = ( e ) => {
    setName( e.target.value );
    setEmailValid( true ); // Reset email validation status
    setMessageValid( false ); // Reset message validation status
  };

  const handleEmailChange = ( e ) => {
    setEmail( e.target.value );
    setEmailValid( validateEmail( e.target.value ) );
  };

  const handleMessageChange = ( e ) => {
    setMessage( e.target.value );
    setMessageValid( e.target.value.length >= 30 );
  };

  const sendEmail = ( e ) => {
    e.preventDefault();

    emailjs.sendForm( 'service_p2yaaj4', 'template_cxndmkf', form.current, 'JgEYCSSohQj6br73X' )
      .then( ( result ) => {
        console.log( result.text );

        // Show toast
        showToast( `Thanks ${ name } for your query. Your query is: ${ message }` );

        // Reset form and states
        form.current.reset();
        setName( '' );
        setEmail( '' );
        setMessage( '' );
        setEmailValid( true );
        setMessageValid( false );
      } )
      .catch( ( error ) => {
        console.log( error.text );
      } );
  };


  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-center py-5 md:py-2">
      {/* <Toaster richColors position='top-right' /> */}
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-2 text-black">
        <div className="bg-white p-6 md:p-8 rounded-md shadow-md text-black mx-2">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-black">Crafting Innovation: Reach Out for Expertise!</h1>
          <span className='flex items-center justify-center space-x-4'>
            <a href='https://twitter.com/ashusnapx' rel='noreferrer' target="_blank" className='text-blue-400 hover:text-blue-500 transition'>
              <LucideTwitter className='w-6 h-6' />
            </a>
            <a href='https://instagram.com/ashusnapx' rel='noreferrer' target="_blank" className='text-pink-300 hover:text-pink-400 transition'>
              <LucideInstagram className='w-6 h-6' />
            </a>
            <a href='https://linkedin.com/in/ashusnapx' rel='noreferrer' target="_blank" className='text-blue-400 hover:text-blue-500 transition'>
              <LucideLinkedin className='w-6 h-6' />
            </a>
            <a href='https://github.com/ashusnapx' rel='noreferrer' target="_blank" className='text-gray-500 hover:text-gray-600 transition'>
              <LucideGithub className='w-6 h-6' />
            </a>
          </span>
          <h1 className='flex items-center justify-center mt-3'>---OR---</h1>
          <form className="space-y-4" ref={form}>
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={name}
                onChange={handleNameChange}
                className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full border rounded p-2 focus:outline-none ${ isEmailValid ? 'border-blue-500' : 'border-red-500'
                  }`}
              />
              {!isEmailValid && (
                <p className="text-red-500 mt-2">Please enter a valid email address</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                className={`w-full border rounded p-2 h-32 focus:outline-none ${ isMessageValid ? 'border-blue-500' : 'border-black'
                  }`}
              />
              {!isMessageValid && (
                <p className="text-black mt-2">Please enter a message with at least 30 characters</p>
              )}
            </div>
            <button
              type="submit"
              onClick={sendEmail}
              disabled={!isMessageValid}
              className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none ${ isMessageValid ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                }`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-1 mt-10 md:mt-0">
        <div className="flex flex-col items-center">
          <img src="https://i.postimg.cc/J4Ytxrww/profile-pic-3.png" alt="Ashutosh Kumar" className="rounded-full h-48 w-48 md:h-96 md:w-96 mb-4 object-cover shadow-2xl hover:grayscale" />
          <h1 className="text-3xl md:text-4xl text-gray-400 font-bold mb-3">Ashutosh Kumar</h1>
          <p className="text-gray-600 font-light text-lg md:text-2xl text-center md:text-left">Baked with ❤️ by Ashutosh Kumar</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
