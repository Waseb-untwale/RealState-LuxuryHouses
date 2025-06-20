import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-800" />
            <span className="text-2xl font-bold text-gray-900">LuxuryHomes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-blue-800' : 'text-gray-700 hover:text-blue-800'
              }`}
            >
              Home
            </Link>

            <Link
              to="/properties"
              className={`font-medium transition-colors ${
                isActive('/properties') ? 'text-blue-800' : 'text-gray-700 hover:text-blue-800'
              }`}
            >
              Properties
            </Link>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('pages')}
              >
                <span>Pages</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                  activeDropdown === 'pages' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setActiveDropdown('pages')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/about"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/features"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/faqs"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Utility Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onMouseEnter={() => setActiveDropdown('utility')}
              >
                <span>Utility</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
                  activeDropdown === 'utility' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setActiveDropdown('utility')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/terms"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/privacy"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* <Link
              to="/blogs"
              className={`font-medium transition-colors ${
                isActive('/blogs') ? 'text-blue-800' : 'text-gray-700 hover:text-blue-800'
              }`}
            >
              Blogs
            </Link> */}

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-800' : 'text-gray-700 hover:text-blue-800'
              }`}
            >
              Contact Us
            </Link>

            <Link
              to="/contact"
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/properties"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/features"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/faqs"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                to="/blogs"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-800 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                className="block w-full mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;