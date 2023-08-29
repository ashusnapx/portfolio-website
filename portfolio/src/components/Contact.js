import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center py-10 md:py-20">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-2">
        <div className="bg-white p-6 md:p-8 rounded-md shadow-md">
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
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto md:order-1 mt-10 md:mt-0">
        <div className="flex flex-col items-center">
          <img src="https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/327884417_1246080662656090_345338729162298868_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=YHeESq-GStUAX8SKf_F&_nc_oc=AQkrirXuC7LlHqYaOgybi6zpZ2JLP7NhzLW6QTrL973T35GdXNA6nIRFfyBGk1mvTTM&_nc_ht=scontent.fbho3-1.fna&oh=00_AfDGvyPC0fOjKr43RTVViko6JQenLAdhzNU6Dd7Mp3FqaA&oe=64EF5135" alt="Ashutosh Kumar" className="rounded-full h-48 w-48 md:h-96 md:w-96 mb-4 object-cover hover:grayscale" />
          <h1 className="text-3xl md:text-4xl text-gray-400 font-bold mb-3">Ashutosh Kumar</h1>
          <p className="text-gray-600 font-light text-lg md:text-2xl text-center md:text-left">Made with ❤️ by Ashutosh Kumar</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
