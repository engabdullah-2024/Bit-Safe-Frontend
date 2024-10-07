import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ isDarkMode, toggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-gray-800 text-white p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Bitsafe</Link>
        </h1>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={handleToggleMenu} 
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {isMobileMenuOpen ? '✖️' : '☰'}
        </button>

        {/* Navigation */}
        <nav className={`md:flex md:items-center ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/send" className="hover:text-gray-400">Send</Link>
            </li>
            <li>
              <Link to="/receive" className="hover:text-gray-400">Receive</Link>
            </li>
            <li>
              <Link to="/transactions" className="hover:text-gray-400">Transactions</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
