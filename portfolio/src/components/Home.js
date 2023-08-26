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
          src="https://scontent.fbho3-1.fna.fbcdn.net/v/t1.6435-9/72197424_136685654393423_2577416694737666048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=-DVZwry4pX0AX_KWvh0&_nc_ht=scontent.fbho3-1.fna&oh=00_AfD8HC2vsCBFvYvv0a0VHvGk4q35f6Qn38_8WK-Nao1SJg&oe=65117C3C"
          alt="Ashutosh Kumar"
          className="rounded-full grayscale h-72 w-72 mx-auto mb-4 object-cover md:h-96 md:w-96 hover:grayscale-0"
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
