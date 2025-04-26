import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: { label: string; path: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-center text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md transition-colors duration-200"
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;