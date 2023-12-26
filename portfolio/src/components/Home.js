import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import { toast } from 'sonner';
import { LucideLightbulb, LucideMilestone } from 'lucide-react';

const Home = () => {
  const introText = [
    { text: "MERN Developer", color: "#10B981" },
    { text: "C++ Programmer", color: "#3B82F6" },
    { text: "Problem Solver", color: "#6366F1" },
    // { text: "Generative AI Lover", color: "#3B82F6" },
    // { text: "Music Lover", color: "#7C3AED" }
  ];

  const [ currentIndex, setCurrentIndex ] = useState( 0 );
  const [ currentColor, setCurrentColor ] = useState( introText[ 0 ].color );
  const textContainerRef = useRef( null );

  useEffect( () => {
    const interval = setInterval( () => {
      setCurrentIndex( prevIndex => ( prevIndex + 1 ) % introText.length );
      setCurrentColor( introText[ currentIndex ].color );
    }, 3000 );

    return () => clearInterval( interval );
  }, [ currentIndex ] );

  return (
    <div className='bg-gray-200/20 flex flex-col md:flex-row items-center justify-center py-10 md:py-20'>
      {/* <Toaster position="top-right" expand={true} richColors /> */}
      <div className='md:w-1/2 p-8 md:pl-0 md:pr-4 flex justify-center items-center'>
        <ProgressiveImage
          src='https://i.postimg.cc/9XSQjMxG/image.png'
          placeholder=''
        >
          {(src, loading) => (
            <img
              src={src}
              alt='Ashutosh Kumar'
              className={`rounded-full drop-shadow-2xl h-72 w-72 mx-auto mb-4 object-cover md:h-96 md:w-96 ${
                loading ? 'opacity-50' : ''
              }`}
              loading={loading ? 'lazy' : 'eager'}
            />
          )}
        </ProgressiveImage>
      </div>
      <div className='md:w-1/2 p-4 md:text-left'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-600 mb-2 md:mb-4 '>
          I'm a{' '}
          <span style={{ color: currentColor }} ref={textContainerRef}>
            {introText[currentIndex].text}
          </span>
        </h1>
        <div>
          <p className='text-2xl md:text-4xl text-gray-600 mb-4 md:mb-6'>
            From India<span className='animate-pulse'> 🇮🇳</span>
          </p>
        </div>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center justify-start '>
          <a
            href='https://bit.ly/415WyYH'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition duration-300 flex flex-row items-center justify-center shadow-xl hover:shadow-2xl'
          >
            <LucideMilestone className='mr-2' />
            View Resume
          </a>
          <Link
            to='/projects'
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition duration-300 flex flex-row items-center justify-center shadow-xl hover:shadow-2xl'
          >
            <LucideLightbulb className='mr-2' />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
