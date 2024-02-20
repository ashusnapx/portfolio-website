import { LucideAtom, LucideMenu } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../constants/constants';
import Modal from './Modal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className='sticky top-0 bg-black text-gray-600 shadow-md py-5 z-50'>
      <nav className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to='/' className='text-2xl font-bold'>
            <div className='flex text-white/90 items-center space-x-2 hover:text-white text-gray-600'>
              <LucideAtom className='text-blue-400 text-3xl' />
              <h1 className='text-2xl font-extralight'>Ashutosh Kumar</h1>
            </div>
          </Link>
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-3xl text-white focus:outline-none'
          >
            <LucideMenu className='w-8 h-8' />
          </button>
        </div>
        <ul className='hidden md:flex md:space-x-4 md:items-center text-lg mt-4 md:mt-0 font-bold'>
          {navigationItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              text={item.text}
              location={location}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
      {isMenuOpen && (
        <Modal closeModal={() => setIsMenuOpen(false)}>
          <ul className='text-lg'>
            {navigationItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                text={item.text}
                location={location}
                icon={item.icon}
              />
            ))}
          </ul>
        </Modal>
      )}
    </header>
  );
};

const NavItem = ({ to, text, location, icon: Icon }) => {
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`block px-4 py-2 text-gray-300 hover:text-white relative transition-colors duration-300 ${
          isActive ? 'font-bold text-blue-500' : ''
        }`}
        style={isActive ? { borderBottom: '2px solid #3182CE' } : {}}
        aria-current={isActive ? 'page' : undefined}
      >
        <Icon className='mr-1 w-5 h-5 inline' />
        {text}
        {isActive && (
          <div className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out'></div>
        )}
      </Link>
    </li>
  );
};

export default Header;
