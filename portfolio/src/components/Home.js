import React, { useState, useEffect } from 'react';

const Home = () => {
  const [ text, setText ] = useState( '' );
  const introText = "I'm a Full Stack Web Developer, C++ Programmer, DSA Solver, Music Lover 🎶";

  useEffect( () => {
    let index = 0;
    const typingInterval = setInterval( () => {
      if ( index <= introText.length ) {
        setText( introText.slice( 0, index ) );
        index++;
      } else {
        clearInterval( typingInterval );
      }
    }, 100 );
  }, [] );

  return (

  <div div className = "bg-black/90 min-h-screen flex flex-col md:flex-row justify-center items-center" >
      <div className="md:w-1/2 p-8 pl-0">
        <img
          src="https://scontent.fbho3-2.fna.fbcdn.net/v/t1.6435-9/72530332_136686904393298_1701810074403471360_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tcTqKwd_takAX9qWmNJ&_nc_ht=scontent.fbho3-2.fna&oh=00_AfAWdIo0X72A-NHadtqNNhMBGqHUjrR9hJTECf_hEj_eTA&oe=65114C90"
          alt="Ashutosh Kumar"
          className="rounded-full h-72 w-72 mx-auto mb-4 object-cover md:h-96 md:w-96 hover:grayscale"
        />
      </div>
      <div className="md:w-1/2 pr-2 text-center md:text-left">
        <h1 className="text-5xl font-bold text-white/80 mb-4 md:mb-6">
          Ashutosh Kumar
        </h1>
        <p className="text-2xl pb-3 text-gray-300/50 mb-6 opacity-90">
          {text}
        </p>
        <a href='https://drive.google.com/file/d/18QGrkOvgGg6Icpf62RA69HHLoRrJVc5Z/view?usp=sharing' target='_blank'
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          View Resume
        </a>
      </div>
    </div >
  );
};

export default Home;
