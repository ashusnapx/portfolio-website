import { Link} from 'react-router-dom';
const NavItem = ( { to, text, location, closeModal } ) => {
    const isActive = location.pathname === to;

    const handleItemClick = () => {
        closeModal(); // Close the modal when a navigation item is clicked
    };

    return (
        <li>
            <Link
                to={to}
                className={`block px-4 py-2 text-gray-300 hover:text-green-600 transition-colors duration-300 relative ${ isActive ? 'font-semibold text-orange-500' : '' }`}
                onClick={handleItemClick} // Call handleItemClick when a navigation item is clicked
            >
                {text}
                {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out"></div>
                )}
            </Link>
        </li>
    );
};

export default NavItem;
