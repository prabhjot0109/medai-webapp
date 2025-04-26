import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, HeartPulse, Shield, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Activity size={48} className="text-primary-600 dark:text-primary-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Med.ai</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Revolutionizing healthcare through artificial intelligence, making personalized health insights accessible to everyone.
          </p>
        </motion.div>
        
        {/* Mission section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            At Med.ai, we're on a mission to transform healthcare by leveraging the power of artificial intelligence to provide personalized, accessible, and proactive health guidance. We believe that everyone deserves access to high-quality health insights that can help them lead healthier, happier lives.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            We're committed to creating a future where healthcare is preventative rather than reactive, where each person receives care tailored to their unique needs, and where the latest advances in medical science are accessible to all through intuitive AI interfaces.
          </p>
        </motion.div>
        
        {/* Problem statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Problem We're Solving</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Healthcare Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Millions of people worldwide lack access to quality healthcare due to geographical barriers, high costs, or shortage of healthcare professionals. Med.ai bridges this gap by providing AI-powered health guidance that's available 24/7 from anywhere.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Reactive vs. Preventative Care</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Traditional healthcare systems often focus on treating conditions after they develop, rather than preventing them. Med.ai shifts the paradigm by helping users identify potential health risks early and suggesting preventative measures.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Information Overload</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The internet is flooded with health information, much of it contradictory or unreliable. Med.ai cuts through the noise by providing evidence-based, personalized health guidance drawn from reliable medical sources.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">One-Size-Fits-All Approaches</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Everyone's body is different, yet many health recommendations don't account for individual variations. Med.ai learns from your unique health data to provide truly personalized guidance tailored to your specific needs.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Core Values</h2>
          
          <div className="space-y-6">
            {[
              {
                icon: <Brain className="text-primary-600 dark:text-primary-400" />,
                title: "Innovation",
                description: "We're constantly pushing the boundaries of what's possible with AI in healthcare, developing cutting-edge solutions to complex health challenges."
              },
              {
                icon: <Shield className="text-primary-600 dark:text-primary-400" />,
                title: "Privacy & Security",
                description: "We maintain the highest standards of data privacy and security, ensuring that your sensitive health information is always protected."
              },
              {
                icon: <Users className="text-primary-600 dark:text-primary-400" />,
                title: "Accessibility",
                description: "We're committed to making high-quality health guidance accessible to everyone, regardless of location, background, or economic status."
              },
              {
                icon: <HeartPulse className="text-primary-600 dark:text-primary-400" />,
                title: "Empathy",
                description: "We approach healthcare with compassion and understanding, recognizing that behind every data point is a human being with unique needs and concerns."
              }
            ].map((value, index) => (
              <div key={index} className="flex items-start bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex-shrink-0 p-2 mr-4">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Prabhjot Singh Assi",
                role: "AI Research Lead",
                bio: "With a background in machine learning and healthcare informatics, Prabhjot leads our AI research efforts to develop cutting-edge health prediction models."
              },
              {
                name: "Vanshika Saraf",
                role: "Chief Medical Officer",
                bio: "A board-certified physician with a passion for digital health, Vanshika ensures that all Med.ai features are medically sound and clinically validated."
              },
              {
                name: "Yatarth Patankar",
                role: "Head of Engineering",
                bio: "A seasoned software architect specializing in secure healthcare systems, Yatarth oversees the technical implementation of Med.ai's platform."
              },
              {
                name: "Ujjwal Seth",
                role: "User Experience Director",
                bio: "With expertise in healthcare UX design, Ujjwal works to make complex health information accessible and actionable for all users."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-primary-600 dark:bg-primary-700 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Join Us in Revolutionizing Healthcare</h2>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Experience the future of personalized healthcare with Med.ai. Start your journey to better health today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/signup" className="px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow">
              Get Started Free
            </a>
            <a href="/contact" className="px-6 py-3 bg-transparent hover:bg-primary-700 border border-white font-medium rounded-md transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;