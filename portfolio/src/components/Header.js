import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import img_11up from '../images/img_11up.png';

const Header = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen( !isMenuOpen );
    };

    const closeMenu = () => {
        setIsMenuOpen( false );
    };

    return (
        <header className="sticky top-0 bg-black text-white shadow-md py-5 z-50">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold">
                        <img src={img_11up} alt="" className="w-48 h-12 scale-110" />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
                        <GiHamburgerMenu />
                    </button>
                </div>
                <ul
                    className={`${ isMenuOpen ? 'block' : 'hidden'
                        } md:flex md:space-x-4 md:items-center text-lg mt-4 md:mt-0`}
                >
                    <NavItem to="/skills" text="SKILLS" closeMenu={closeMenu} location={location} />
                    <NavItem to="/projects" text="PROJECTS" closeMenu={closeMenu} location={location} />
                    <NavItem to="/imp-links" text="IMPORTANT LINKS" closeMenu={closeMenu} location={location} />
                    <NavItem to="/qualifications" text="QUALIFICATIONS" closeMenu={closeMenu} location={location} />
                    <NavItem to="/ai-artworks" text="AI ART WORK" closeMenu={closeMenu} location={location} />
                    <NavItem to="/contact" text="CONTACT" closeMenu={closeMenu} location={location} />
                </ul>
            </nav>
        </header>
    );
};

const NavItem = ( { to, text, closeMenu, location } ) => {
    const isActive = location.pathname === to;

    return (
        <li>
            <Link
                to={to}
                onClick={closeMenu}
                className={`block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative ${ isActive ? 'font-semibold text-white' : ''
                    }`}
            >
                {text}
                {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out"></div>
                )}
            </Link>
        </li>
    );
};

export default Header;
