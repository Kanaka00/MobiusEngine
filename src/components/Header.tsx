import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, CircleUser } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <motion.a 
              href="/" 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">
                MobiusEngine<span className="text-primary-500">.ai</span>
              </span>
            </motion.a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">FAQ</a>
            <a href="#contact" className="btn-primary">Get Started</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-5 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>How It Works</a>
            <a href="#pricing" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#faq" className="block text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>FAQ</a>
            <a href="#contact" className="block btn-primary w-full text-center" onClick={() => setIsOpen(false)}>Get Started</a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;