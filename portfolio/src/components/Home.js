import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Home = () => {
  const introText = [
    { text: "MERN Developer", color: "#10B981" },
    { text: "C++ Programmer", color: "#3B82F6" },
    { text: "Problem Solver", color: "#6366F1" },
    { text: "Music Lover", color: "#7C3AED" }
  ];
  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const [ displayedText, setDisplayedText ] = useState( '' );
  const [ currentColor, setCurrentColor ] = useState( introText[ currentIndex ].color );

  useEffect( () => {
    const interval = setInterval( () => {
      setCurrentIndex( ( currentIndex + 1 ) % introText.length );
      setDisplayedText( '' );
      setCurrentColor( introText[ currentIndex ].color );
    }, 3000 );

    return () => clearInterval( interval );
  }, [ currentIndex ] );

  useEffect( () => {
    if ( displayedText.length < introText[ currentIndex ].text.length ) {
      setTimeout( () => {
        setDisplayedText( introText[ currentIndex ].text.slice( 0, displayedText.length + 1 ) );
      }, 100 );
    }
  }, [ displayedText, currentIndex ] );

  useEffect( () => {
    window.scrollTo( 0, 0 );
  }, [] );

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden text-center">
      <div className="md:w-1/2 p-8 md:pl-0 md:pr-4 flex justify-center items-center">
        <img
          src="https://i.postimg.cc/8zfFQ8TT/Profile-picture-2.png"
          alt="Ashutosh Kumar"
          className="rounded-full h-72 w-72 mx-auto mb-4 object-cover md:h-96 md:w-96 hover:grayscale"
        />
      </div>
      <div className="md:w-1/2 p-4 md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4">
          I'm a <span style={{ color: currentColor }}>{displayedText}</span>
        </h1>
        <p className="text-2xl md:text-4xl text-white mb-4 md:mb-6">
          From India 🇮🇳
        </p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center justify-start">
          <a
            href="https://drive.google.com/file/d/18QGrkOvgGg6Icpf62RA69HHLoRrJVc5Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition duration-300 flex flex-row items-center justify-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Resume
          </a>
          <a
            href="https://drive.google.com/file/d/18QGrkOvgGg6Icpf62RA69HHLoRrJVc5Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition duration-300 flex flex-row items-center justify-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
