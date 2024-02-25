import { LucideLink2, LucideMousePointerClick } from 'lucide-react';
import React, { useEffect } from 'react';
import { linksData } from '../constants/constants';

const ImportantLinks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-gray-100 min-h-screen py-16 flex flex-col'>
      <div className='container mx-auto text-center'>
        <div className='flex items-center justify-center space-x-2'>
          <h1 className='text-4xl font-bold text-black/50 mb-10'>
            Important Links
          </h1>
          <LucideMousePointerClick className='w-10 h-9 text-black/50 mb-10' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {linksData.map((link) => (
            <div
              key={link.name}
              className='bg-white rounded-md shadow-md p-6 flex flex-col'
            >
              <div className='h-20 mb-4 flex items-center justify-center'>
                <img
                  src={link.logo}
                  alt={link.name}
                  className='h-full  p-1 rounded-md'
                  decoding='async'
                />
              </div>
              <h2 className='text-xl font-semibold mb-2 text-black'>
                {link.name}
              </h2>
              <p className='text-gray-500 mb-4 line-clamp-3'>
                {link.description}
              </p>
              <a
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center bg-blue-500 text-white py-2 px-4 rounded-md justify-center hover:bg-blue-600 transition duration-300'
              >
                <LucideLink2 className='mr-2' /> Link to {link.name}'s profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
