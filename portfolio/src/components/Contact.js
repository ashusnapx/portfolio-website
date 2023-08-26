import React from 'react';
import { FaGithub, FaMedium, FaLinkedin, FaTwitter, FaCode, FaUserNinja } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-black/90 min-h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-2">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Contact Me</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Your Name</label>
              <input type="text" id="name" name="name" className="w-full border rounded p-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full border rounded p-2 focus:outline-none focus:border-blue-500" />
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
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-1 md:mb-6">
        <div className="flex flex-col items-center">
          <img src="https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/327884417_1246080662656090_345338729162298868_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=YHeESq-GStUAX8SKf_F&_nc_oc=AQkrirXuC7LlHqYaOgybi6zpZ2JLP7NhzLW6QTrL973T35GdXNA6nIRFfyBGk1mvTTM&_nc_ht=scontent.fbho3-1.fna&oh=00_AfDGvyPC0fOjKr43RTVViko6JQenLAdhzNU6Dd7Mp3FqaA&oe=64EF5135" alt="Ashutosh Kumar" className="rounded-full h-96 w-96 mb-4 object-cover hover:grayscale" />
          <h1 className="text-4xl text-white font-bold">Ashutosh Kumar</h1>
          <p className="text-gray-600 font-light text-2xl">FrontEnd Web Developer</p>
          <div className="flex text-5xl space-x-4 mt-4">
            <a href="https://github.com/ashusnapx" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://medium.com/@ashusnapx" target="_blank" rel="noopener noreferrer">
              <FaMedium className="text-gray-600 hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ashusnapx" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-600 hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://twitter.com/ashu_snapx" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-600 hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="https://leetcode.com/dollarSign/" target="_blank" rel="noopener noreferrer">
              <FaCode className="text-gray-600 hover:text-yellow-400 transition-colors duration-300" />
            </a>
            <a href="https://www.codingninjas.com/studio/profile/ashusnapx" target="_blank" rel="noopener noreferrer">
              <FaUserNinja className="text-gray-600 hover:text-orange-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
