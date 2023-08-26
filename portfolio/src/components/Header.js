import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-black text-gray-300 py-5 top-0 sticky shadow-md">
            <nav className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-6 text-xl">
                    <NavItem to="/" text="ABOUT ME" />
                    <NavItem to="/skills" text="SKILLS" />
                    <NavItem to="/projects" text="PROJECTS" />
                    <NavItem to="/qualifications" text="QUALIFICATIONS" />
                    <NavItem to="/contact" text="CONTACT" />
                </ul>
            </nav>
        </header>
    );
};

const NavItem = ( { to, text } ) => {
    return (
        <li>
            <Link to={to} className="relative nav-link group">
                {text}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
            </Link>
        </li>
    );
};

export default Header;
