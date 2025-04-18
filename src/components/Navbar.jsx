import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar text-gray-900 py-1 rounded-xl shadow-md mt-2">
    <div className="flex justify-between items-center w-full mx-auto">
      <div className='flex items-center'>
      <Link to="/" className="logo">Youngeagles</Link>
      </div>
      
      <ul className="nav-menu flex flex-row text-lg">
        <li><Link to="/" className="hover:text-blue-900">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
        <li><Link to="/admission" className="hover:text-blue-300">Admission</Link></li>
        <li><Link to="/programs" className="hover:text-blue-300">Our Programs</Link></li>
        <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
