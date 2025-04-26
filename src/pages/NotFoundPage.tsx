import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30">
              <AlertCircle size={48} className="text-red-600 dark:text-red-400" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Page Not Found</h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="inline-flex items-center px-5 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md transition-colors duration-200 shadow-sm hover:shadow"
            >
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-5 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;