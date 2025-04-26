import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary-400 dark:bg-primary-700 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-accent-400 dark:bg-accent-700 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Med.ai - Your AI Health Companion
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Personalized health insights powered by artificial intelligence
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="/signup"
                className="inline-block px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md transition-colors duration-200 shadow-sm hover:shadow group"
              >
                <span className="flex items-center">
                  Get Started
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                to="/features"
                className="inline-block px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md transition-colors duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Medical dashboard illustration */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">Health Dashboard</span>
                  </div>
                  <div className="flex space-x-1">
                    {['bg-red-500', 'bg-yellow-500', 'bg-green-500'].map((color, i) => (
                      <div key={i} className={`w-3 h-3 rounded-full ${color}`}></div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <div className="w-full px-4">
                      <div className="h-4 w-3/4 bg-primary-200 dark:bg-primary-900 rounded mb-3"></div>
                      <div className="h-4 w-1/2 bg-primary-300 dark:bg-primary-800 rounded mb-3"></div>
                      <div className="h-4 w-5/6 bg-primary-400 dark:bg-primary-700 rounded mb-3"></div>
                      <div className="h-4 w-2/3 bg-primary-500 dark:bg-primary-600 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-8 w-full bg-white dark:bg-gray-800 rounded"></div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-8 w-full bg-white dark:bg-gray-800 rounded"></div>
                  </div>
                </div>
                
                <div className="bg-primary-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 rounded bg-primary-400 dark:bg-primary-600 mr-3"></div>
                    <div className="h-3 w-1/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  </div>
                  <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;