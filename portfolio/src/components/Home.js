import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Home = () => {
  const [ text, setText ] = useState( '' );
  const introText = [ "I'm a", "MERN Developer", "C++ Programmer", "Problem Solver", "Music Lover 🎶" ];
  const [ currentIndex, setCurrentIndex ] = useState( 1 );
  const [ currentColor, setCurrentColor ] = useState( '#10B981' ); // Default soothing color

  const soothingColors = [ '#10B981', '#3B82F6', '#6366F1', '#7C3AED', '#9333EA' ];

  useEffect( () => {
    const typingInterval = setInterval( () => {
      if ( currentIndex < introText.length ) {
        if ( text.length < introText[ currentIndex ].length ) {
          setText( introText[ currentIndex ].slice( 0, text.length + 1 ) );
        } else {
          clearInterval( typingInterval );
          setTimeout( () => {
            setText( '' );
            setCurrentIndex( ( currentIndex + 1 ) % introText.length );
            setCurrentColor( soothingColors[ currentIndex ] ); // Change color on index change
          }, 1000 ); // Adjust the delay between phrases as needed
        }
      }
    }, 100 );

    return () => clearInterval( typingInterval );
  }, [ currentIndex, text ] );

  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row justify-center items-center overflow-hidden">
      <div className="md:w-1/2 p-8 pl-0">
        <img
          src="https://scontent.fbho3-1.fna.fbcdn.net/v/t1.6435-9/72197424_136685654393423_2577416694737666048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=-DVZwry4pX0AX_KWvh0&_nc_ht=scontent.fbho3-1.fna&oh=00_AfD8HC2vsCBFvYvv0a0VHvGk4q35f6Qn38_8WK-Nao1SJg&oe=65117C3C"
          alt="Ashutosh Kumar"
          className="rounded-full grayscale h-72 w-72 mx-auto mb-4 object-cover md:h-96 md:w-96 hover:grayscale-0"
        />
      </div>
      <div className="md:w-1/2 pr-2 text-center md:text-left">
        <h1 className="text-5xl font-bold text-white/80 mb-4 md:mb-6">
          {currentIndex === 0 ? introText[ 0 ] : `${ introText[ 0 ] } `}
          <span style={{ color: currentColor }}>{text}</span>
        </h1>
        <p className="text-3xl pb-3 text-gray-300/50 mb-6 opacity-90">
          From India 🇮🇳
        </p>
        <a
          href="https://drive.google.com/file/d/18QGrkOvgGg6Icpf62RA69HHLoRrJVc5Z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 flex items-center w-96 justify-center"
        >
          <FaExternalLinkAlt className="mr-2" />
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
