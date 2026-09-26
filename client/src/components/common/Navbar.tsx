import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import logoImg from '../../assets/logo.jpg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Internships', path: '/internship' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-navy-bg/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white dark:bg-navy-bg border-b border-gray-100 dark:border-navy-card py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logoImg}
              alt="Krupa Sindhu Logo"
              className="h-10 w-auto object-contain rounded shadow-sm border border-gray-200 dark:border-navy-border group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base md:text-lg leading-tight tracking-tight text-brand-red transition-colors">
                KRUPASINDHU
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-navy-muted tracking-wide flex items-center gap-1">
                Softwares & Advertisement <span className="hidden lg:inline-block text-brand-green font-bold">• ISO 9001:2015</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-red bg-red-50 dark:bg-brand-red/10 dark:text-red-400 font-bold'
                      : 'text-gray-700 hover:text-brand-red dark:text-gray-200 dark:hover:text-brand-red hover:bg-gray-50 dark:hover:bg-navy-card/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />

            <Link
              to="/internship"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white bg-brand-red hover:bg-brand-redHover shadow-md shadow-brand-red/20 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Bar & Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-navy-card focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-navy-surface border-b border-gray-200 dark:border-navy-card px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-red bg-red-50 dark:bg-brand-red/10 dark:text-red-400 font-bold'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-card'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col space-y-2 border-t border-gray-100 dark:border-navy-card mt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-green px-4 py-1">
                <ShieldCheck className="w-4 h-4" /> ISO 9001:2015 Certified Enterprise
              </div>
              <Link
                to="/internship"
                className="w-full text-center px-4 py-3 rounded-lg font-bold text-white bg-brand-red hover:bg-brand-redHover shadow-md"
              >
                Enroll Now / View Courses
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
