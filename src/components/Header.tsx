import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-primary-300 font-bold text-3xl mr-2">DIGITAL</span>
              <span className="text-secondary-600 font-bold text-3xl">FACTORY</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#benefits" className="font-medium text-gray-700 hover:text-primary-500 transition-colors">Avantages</a>
            <a href="#pricing" className="font-medium text-gray-700 hover:text-primary-500 transition-colors">Tarifs</a>
            <a href="#trial" className="font-medium text-gray-700 hover:text-primary-500 transition-colors">Offre d'Essai</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-primary-500 transition-colors">Contact</a>
          </nav>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <nav 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#benefits" 
            className="font-medium text-gray-700 hover:text-primary-500 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Avantages
          </a>
          <a 
            href="#pricing" 
            className="font-medium text-gray-700 hover:text-primary-500 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tarifs
          </a>
          <a 
            href="#trial" 
            className="font-medium text-gray-700 hover:text-primary-500 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Offre d'Essai
          </a>
          <a 
            href="#contact" 
            className="font-medium text-gray-700 hover:text-primary-500 transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;