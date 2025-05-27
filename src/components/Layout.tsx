import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo />
            {/* <span className="ml-2 text-lg font-semibold text-gray-800">OneCloud</span> */}
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-medium ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              About
            </Link>
            <Link to="/partnerships" className={`text-sm font-medium ${location.pathname === '/partnerships' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Partnerships
            </Link>
            <Link to="/journey" className={`text-sm font-medium ${location.pathname === '/journey' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Journey
            </Link>
            <Link to="/services" className={`text-sm font-medium ${location.pathname === '/services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Services
            </Link>
            <Link to="/cloud" className={`text-sm font-medium ${location.pathname === '/cloud' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              1Cloud NG
            </Link>
            <Link to="/customers" className={`text-sm font-medium ${location.pathname === '/customers' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Customers
            </Link>
            <Link to="/projects" className={`text-sm font-medium ${location.pathname === '/projects' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Projects
            </Link>
            <Link to="/contact" className={`text-sm font-medium ${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Contact Us
            </Link>
          </nav>
          
          <button 
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/partnerships" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Partnerships
            </Link>
            <Link to="/journey" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Journey
            </Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/cloud" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              1Cloud NG
            </Link>
            <Link to="/customers" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Customers
            </Link>
            <Link to="/projects" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;