import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar rounded-box shadow-base-300/20 shadow-sm bg-gray-900 sm:hidden" aria-label="Main Navigation">
    <div className="w-full md:flex md:items-center md:gap-2">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-800">Young Eagles</Link>
        <ul className="flex items-center justify-between space-x-4">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
          <li><Link to="/admission" className="hover:text-blue-600">Admission</Link></li>
          <li><Link to="/programs" className="hover:text-blue-600">Our Programs</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;