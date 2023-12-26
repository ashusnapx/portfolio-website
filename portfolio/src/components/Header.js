import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from './Modal';
import {
  BadgeCheck,
  BadgeCheckIcon,
  LucideAtom,
  LucideBadge,
  LucideHammer,
  LucideMenu,
  LucideMousePointerClick,
  LucidePhoneCall,
  LucideSchool,
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false); // Close the menu when location changes
  }, [location]);

  return (
    <header className='sticky top-0 bg-black text-gray-600 shadow-md py-5 z-50'>
      <nav className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to='/' className='text-2xl font-bold'>
            {/* <img src={img_11up} alt="" className="w-48 h-12" /> */}
            <div className='flex text-white/90 items-center space-x-2 hover:text-white text-gray-600'>
              <LucideAtom className='text-blue-400 animate-bounce' />
              <h1>Ashutosh Kumar</h1>
            </div>
          </Link>
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-3xl text-white focus:outline-none'
          >
            {/* <GiHamburgerMenu /> */}
            <LucideMenu className='w-8 h-8' />
          </button>
        </div>
        {/* This ul element will only show on medium and larger screens */}
        <ul className='hidden md:flex md:space-x-4 md:items-center text-lg mt-4 md:mt-0'>
          <div className='flex flex-row items-center justify-center'>
            <NavItem to='/skills' text='SKILLS' location={location} />
            <LucideHammer />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <NavItem to='/projects' text='PROJECTS' location={location} />
            <LucideBadge />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <NavItem
              to='/imp-links'
              text='IMPORTANT LINKS'
              location={location}
            />
            <LucideMousePointerClick />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <NavItem
              to='/qualifications'
              text='QUALIFICATIONS'
              location={location}
            />
            <LucideSchool />
          </div>
          <div className='flex flex-row items-center justify-center'>
            <NavItem to='/contact' text='CONTACT' location={location} />
            <LucidePhoneCall />
          </div>
        </ul>
      </nav>
      {isMenuOpen && (
        <Modal closeModal={() => setIsMenuOpen(false)}>
          {/* This ul element will show in the modal */}
          <ul className='text-lg'>
            <NavItem to='/skills' text='SKILLS' location={location} />
            <NavItem to='/projects' text='PROJECTS' location={location} />
            <NavItem
              to='/imp-links'
              text='IMPORTANT LINKS'
              location={location}
            />
            <NavItem
              to='/qualifications'
              text='QUALIFICATIONS'
              location={location}
            />
            <NavItem to='/contact' text='CONTACT' location={location} />
          </ul>
        </Modal>
      )}
    </header>
  );
};

const NavItem = ({ to, text, location }) => {
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`block px-4 py-2 text-gray-300 hover:text-white relative transition-colors duration-300 ${
          isActive ? 'font-semibold text-blue-500' : ''
        }`}
        style={isActive ? { borderBottom: '2px solid #3182CE' } : {}}
      >
        {text}
        {isActive && (
          <div className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out'></div>
        )}
      </Link>
    </li>
  );
};

export default Header;
