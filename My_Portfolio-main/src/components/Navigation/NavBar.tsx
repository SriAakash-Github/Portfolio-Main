import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'home', key: 'F1' },
  { path: '/projects', label: 'projects', key: 'F2' },
  { path: '/skills', label: 'skills', key: 'F3' },
  { path: '/experience', label: 'experience', key: 'F4' },
  { path: '/education', label: 'education', key: 'F5' },
  { path: '/contact', label: 'contact', key: 'F6' },
];

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyMap: { [key: string]: string } = {
        'F1': '/',
        'F2': '/projects',
        'F3': '/skills',
        'F4': '/experience',
        'F5': '/education',
        'F6': '/contact'
      };

      if (keyMap[event.key]) {
        event.preventDefault();
        navigate(keyMap[event.key]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-cyan-400 font-mono text-lg md:text-xl font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            [sri-aakash@arch ~]$
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                className={`font-mono text-sm ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400'
                } transition-colors duration-200`}
              >
                <span className="text-gray-600">{item.key}</span> {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="text-xs text-gray-500 font-mono">F1-F6</div>
            <button className="text-cyan-400 hover:text-cyan-300 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                className={`p-2 rounded text-xs font-mono ${
                  location.pathname === item.path
                    ? 'bg-cyan-400 text-black'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'
                } transition-all duration-200`}
              >
                <div className="text-xs opacity-60">{item.key}</div>
                <div>{item.label}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};