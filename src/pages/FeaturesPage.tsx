import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartPulse, Stethoscope, Dna, Sparkles, Lock, MessageSquare, BarChart, Image } from 'lucide-react';

const FeatureSection: React.FC<{ 
  id: string;
  title: string;
  description: string;
  image?: string;
  icon: React.ReactNode;
  reverse?: boolean;
  children?: React.ReactNode;
}> = ({ id, title, description, icon, reverse = false, children }) => {
  return (
    <div id={id} className="py-16 scroll-mt-20">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 mr-3">
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{description}</p>
          {children}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: reverse ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 md:p-8 bg-gray-50 dark:bg-gray-900">
              {/* Feature illustration or mockup would go here */}
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">Feature Illustration</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <Sparkles size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Benefit description #{item} for the {title} feature
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Features & Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover how Med.ai combines advanced AI technology with medical expertise to deliver personalized health insights and guidance.
          </p>
        </motion.div>
        
        {/* Features navigation */}
        <div className="mb-12 sticky top-20 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
          <ul className="flex overflow-x-auto space-x-6 pb-1">
            {[
              { id: 'ai-insights', label: 'AI Insights', icon: <Brain size={16} /> },
              { id: 'monitoring', label: 'Health Monitoring', icon: <HeartPulse size={16} /> },
              { id: 'consultations', label: 'Medical Consultations', icon: <Stethoscope size={16} /> },
              { id: 'plans', label: 'Personalized Plans', icon: <Dna size={16} /> },
              { id: 'security', label: 'Data Security', icon: <Lock size={16} /> }
            ].map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className="whitespace-nowrap flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Feature sections */}
        <div className="space-y-12 border-l-2 border-gray-200 dark:border-gray-800 pl-8">
          <FeatureSection
            id="ai-insights"
            title="AI-Powered Health Insights"
            description="Our advanced algorithms analyze your health data to provide personalized recommendations and insights tailored to your unique profile."
            icon={<Brain size={24} className="text-primary-600 dark:text-primary-400" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Med.ai's machine learning models identify patterns in your health data that might be missed by traditional analysis, helping to detect potential health issues before they become serious.
              </p>
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-100 dark:border-primary-800">
                <p className="text-primary-800 dark:text-primary-300 text-sm">
                  <strong>Did you know?</strong> Our AI has been trained on millions of anonymized health records, allowing it to recognize subtle patterns that may indicate early warning signs of various conditions.
                </p>
              </div>
            </div>
          </FeatureSection>
          
          <FeatureSection
            id="monitoring"
            title="Continuous Health Monitoring"
            description="Track vital health metrics over time and receive alerts about potentially concerning changes that may require attention."
            icon={<HeartPulse size={24} className="text-primary-600 dark:text-primary-400" />}
            reverse={true}
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Connect your wearable devices or manually log your health data to maintain a comprehensive picture of your health trends and receive personalized insights.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Heart Rate', 'Blood Pressure', 'Sleep', 'Activity', 'Nutrition', 'Mood'].map((metric) => (
                  <span key={metric} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </FeatureSection>
          
          <FeatureSection
            id="consultations"
            title="AI Medical Consultations"
            description="Chat with our AI assistant about your symptoms and health concerns to receive evidence-based guidance and recommendations."
            icon={<MessageSquare size={24} className="text-primary-600 dark:text-primary-400" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Our AI chatbot uses natural language processing to understand your health concerns and provides responses based on the latest medical research and guidelines.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  <strong>Important:</strong> While our AI provides helpful guidance, it's not a replacement for professional medical advice. Always consult with a healthcare provider for serious concerns.
                </p>
              </div>
            </div>
          </FeatureSection>
          
          <FeatureSection
            id="plans"
            title="Personalized Health Plans"
            description="Receive customized fitness, nutrition, and wellness plans based on your health profile, goals, and preferences."
            icon={<Dna size={24} className="text-primary-600 dark:text-primary-400" />}
            reverse={true}
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Our AI analyzes your unique health data, genetic factors, lifestyle, and goals to create truly personalized plans that adapt as you progress.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { title: 'Fitness', description: 'Workout routines tailored to your fitness level' },
                  { title: 'Nutrition', description: 'Meal plans based on your dietary needs' },
                  { title: 'Sleep', description: 'Personalized sleep improvement strategies' },
                  { title: 'Stress', description: 'Custom stress management techniques' }
                ].map((plan, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">{plan.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FeatureSection>
          
          <FeatureSection
            id="imaging"
            title="AI Medical Image Analysis"
            description="Upload medical images for AI-powered analysis to help identify potential concerns that may require further medical evaluation."
            icon={<Image size={24} className="text-primary-600 dark:text-primary-400" />}
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Our deep learning algorithms can analyze various types of medical images to identify patterns and anomalies, providing an additional layer of screening.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  <strong>Important:</strong> Our image analysis is intended as a supplementary tool and should not replace professional medical evaluation of your images.
                </p>
              </div>
            </div>
          </FeatureSection>
          
          <FeatureSection
            id="security"
            title="Advanced Data Security"
            description="Your health data is protected with industry-leading security measures, ensuring your sensitive information remains private and secure."
            icon={<Lock size={24} className="text-primary-600 dark:text-primary-400" />}
            reverse={true}
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                We employ end-to-end encryption, secure data storage, and strict access controls to protect your health information. Your privacy is our top priority.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  { title: 'End-to-End Encryption', description: 'Your data is encrypted in transit and at rest' },
                  { title: 'HIPAA Compliance', description: 'We adhere to strict healthcare privacy standards' },
                  { title: 'User Control', description: 'You decide who can access your health data' },
                  { title: 'Regular Audits', description: 'Our security measures undergo regular testing' }
                ].map((feature, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FeatureSection>
        </div>
        
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to experience the future of healthcare?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who are taking control of their health with Med.ai's personalized insights and guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/signup" className="px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow">
                Get Started Free
              </a>
              <a href="/demo" className="px-8 py-4 bg-transparent hover:bg-primary-500 border border-white font-medium rounded-md transition-colors duration-200">
                Schedule a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;