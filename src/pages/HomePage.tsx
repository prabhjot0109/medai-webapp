import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Brain, HeartPulse, Stethoscope, Dna } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain size={40} className="text-primary-600 dark:text-primary-400" />,
      title: "AI-Powered Insights",
      description: "Advanced algorithms analyze your health data for personalized recommendations",
      link: "/features#ai-insights"
    },
    {
      icon: <HeartPulse size={40} className="text-primary-600 dark:text-primary-400" />,
      title: "Health Monitoring",
      description: "Track vital metrics and receive alerts about concerning changes",
      link: "/features#monitoring"
    },
    {
      icon: <Stethoscope size={40} className="text-primary-600 dark:text-primary-400" />,
      title: "Medical Consultations",
      description: "Chat with our AI assistant about symptoms and health concerns",
      link: "/features#consultations"
    },
    {
      icon: <Dna size={40} className="text-primary-600 dark:text-primary-400" />,
      title: "Personalized Plans",
      description: "Receive customized fitness and nutrition plans based on your health profile",
      link: "/features#plans"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4"
            >
              Key Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Discover how Med.ai can revolutionize your healthcare experience with cutting-edge AI technology
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  link={feature.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4"
            >
              How Med.ai Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              A simple three-step process to better health management
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Connect Your Data",
                description: "Link your health devices or manually input your health metrics to create your profile."
              },
              {
                step: 2,
                title: "Get AI Analysis",
                description: "Our algorithms analyze your data to identify patterns and provide personalized insights."
              },
              {
                step: 3,
                title: "Take Action",
                description: "Follow personalized recommendations and track your progress over time."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/signup"
              className="inline-block px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md transition-colors duration-200 shadow-sm hover:shadow"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Real stories from people who have improved their health with Med.ai
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Med.ai helped me identify early warning signs of high blood pressure and provided actionable steps to improve my health.",
                name: "Sarah J.",
                role: "Wellness Enthusiast"
              },
              {
                quote: "The personalized fitness plans adjusted to my progress perfectly. I've seen more improvement in 3 months than in years of gym membership.",
                name: "Michael T.",
                role: "Fitness Beginner"
              },
              {
                quote: "As someone with a chronic condition, the ability to track my symptoms and get AI-powered insights has been invaluable for managing my health.",
                name: "Elena R.",
                role: "Patient Advocate"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
              >
                <div className="mb-4 text-primary-600 dark:text-primary-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-700 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to take control of your health?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-10"
          >
            Join thousands of users who have transformed their health journey with Med.ai
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/signup"
              className="px-8 py-4 text-base font-medium text-primary-600 bg-white hover:bg-gray-100 rounded-md transition-colors duration-200 shadow-sm hover:shadow"
            >
              Get Started Free
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 text-base font-medium text-white bg-transparent hover:bg-primary-700 border border-white rounded-md transition-colors duration-200"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;