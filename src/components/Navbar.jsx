import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white-100 p-4 shadow-md">
    <div className="flex items-center justify-between w-full px-4">
      <Link to="/" className="text-2xl font-bold text-blue-800">Young Eagles</Link>
      <ul className="flex space-x-6 text-blue-600 font-semibold">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
        <li><Link to="/admission" className="hover:text-blue-600">Admission</Link></li>
        <li><Link to="/programs" className="hover:text-blue-600">Our Programs</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;