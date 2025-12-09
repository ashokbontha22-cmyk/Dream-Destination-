import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './Button';

const navItems: NavItem[] = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Packages', href: '#packages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50">
            <div className={`p-2 rounded-lg ${isScrolled || isMobileMenuOpen ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy'}`}>
              <Globe size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold leading-none ${isScrolled || isMobileMenuOpen ? 'text-brand-navy' : 'text-white'}`}>
                Dream' Destination
              </span>
              <span className={`text-xs tracking-widest uppercase ${isScrolled || isMobileMenuOpen ? 'text-brand-orange' : 'text-gray-200'}`}>
                Travels
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium hover:text-brand-orange transition-colors ${
                    isScrolled ? 'text-slate-600' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button variant={isScrolled ? "primary" : "white"} className="px-5 py-2 text-sm">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-brand-navy" size={28} />
            ) : (
              <Menu className={isScrolled ? 'text-brand-navy' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: 0, paddingTop: '100px' }}
      >
        <div className="container mx-auto px-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-serif font-bold text-brand-navy hover:text-brand-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <div className="flex items-center gap-3 text-slate-600">
            <Phone size={20} />
            <span>+1 (800) 123-4567</span>
          </div>
          <Button variant="primary" className="w-full mt-4">
            Book a Trip
          </Button>
        </div>
      </div>
    </nav>
  );
};