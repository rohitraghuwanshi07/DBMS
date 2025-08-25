import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-700 text-white">
      <div className="ornate-border pt-6">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-primary-500" />
                <span className="ml-2 text-2xl font-serif font-bold">
                  <span className="text-primary-500">Heritage</span>
                  <span className="text-accent-500">Delhi</span>
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Your comprehensive guide to Delhi's rich heritage, 
                tourist attractions, and hotel visitor analytics.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-accent-500">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-primary-300 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/history" className="text-gray-300 hover:text-primary-300 transition">
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/places-to-visit" className="text-gray-300 hover:text-primary-300 transition">
                    Places to Visit
                  </Link>
                </li>
                <li>
                  <Link to="/analysis" className="text-gray-300 hover:text-primary-300 transition">
                    Hotel Analysis
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-accent-500">Popular Places</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 hover:text-primary-300 transition">Red Fort</li>
                <li className="text-gray-300 hover:text-primary-300 transition">India Gate</li>
                <li className="text-gray-300 hover:text-primary-300 transition">Qutub Minar</li>
                <li className="text-gray-300 hover:text-primary-300 transition">Humayun's Tomb</li>
                <li className="text-gray-300 hover:text-primary-300 transition">Lotus Temple</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Heritage Delhi. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Data analysis and visualization by Delhi Tourism Department.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;