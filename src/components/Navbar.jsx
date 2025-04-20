import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Programs', to: '/programs' },
    { name: 'Admission', to: '/admission' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="navbar bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-box shadow">
      <div className="w-full flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2">
          Young Eagles
          <svg width="24" height="24" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg" />
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          className="md:hidden btn btn-outline btn-secondary btn-sm btn-square ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation links */}
        <div
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-gray-100 dark:bg-gray-900 md:flex md:items-center md:justify-end md:static z-20 ${
            isOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0 text-base">
            {navItems.map(({ name, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`hover:text-blue-600 ${
                    location.pathname === to ? 'font-bold underline text-blue-700 dark:text-blue-300' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
