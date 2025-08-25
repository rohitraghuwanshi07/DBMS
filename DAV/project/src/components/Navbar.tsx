import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Landmark, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Landmark className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-2xl font-serif font-bold">
              <span className="text-primary-500">Heritage</span>
              <span className="text-accent-500">Delhi</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/history" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              History
            </NavLink>
            <NavLink to="/places-to-visit" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Places to Visit
            </NavLink>
            <NavLink to="/analysis" className={({isActive}) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Analysis
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-5 pb-3 space-y-3">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `block py-2 px-4 rounded ${isActive ? 'bg-primary-100 text-primary-500' : ''}`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/history" 
              className={({isActive}) => 
                `block py-2 px-4 rounded ${isActive ? 'bg-primary-100 text-primary-500' : ''}`
              }
              onClick={toggleMenu}
            >
              History
            </NavLink>
            <NavLink 
              to="/places-to-visit" 
              className={({isActive}) => 
                `block py-2 px-4 rounded ${isActive ? 'bg-primary-100 text-primary-500' : ''}`
              }
              onClick={toggleMenu}
            >
              Places to Visit
            </NavLink>
            <NavLink 
              to="/analysis" 
              className={({isActive}) => 
                `block py-2 px-4 rounded ${isActive ? 'bg-primary-100 text-primary-500' : ''}`
              }
              onClick={toggleMenu}
            >
              Analysis
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;