import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen bg">
    <Navbar />
    <main className="flex-grow container mx-auto p-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;