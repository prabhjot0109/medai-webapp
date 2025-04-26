import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 h-full transition-all duration-300 hover:shadow-md group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200"
      >
        Learn more
        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
};

export default FeatureCard;