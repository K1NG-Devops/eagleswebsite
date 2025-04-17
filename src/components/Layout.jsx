import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen w-full">
    <Navbar />
    <main className="flex-grow w-full px-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;