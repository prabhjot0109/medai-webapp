import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Settings as Lungs, Droplet, Apple, Beef as Sleep, BarChart, LineChart } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Sample data for charts
const healthData = [
  { name: 'Mon', heartRate: 72, steps: 6000, hydration: 1.5, sleep: 7.5 },
  { name: 'Tue', heartRate: 75, steps: 8000, hydration: 2.0, sleep: 6.5 },
  { name: 'Wed', heartRate: 70, steps: 7500, hydration: 2.5, sleep: 8.0 },
  { name: 'Thu', heartRate: 73, steps: 9000, hydration: 2.2, sleep: 7.0 },
  { name: 'Fri', heartRate: 76, steps: 10000, hydration: 1.8, sleep: 7.2 },
  { name: 'Sat', heartRate: 68, steps: 5000, hydration: 3.0, sleep: 8.5 },
  { name: 'Sun', heartRate: 71, steps: 7000, hydration: 2.8, sleep: 8.0 },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Health Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">Your health metrics at a glance</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Custom range</option>
              </select>
              <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200">
                Export Data
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Health metrics cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            { title: 'Heart Rate', value: '72', unit: 'bpm', icon: <Heart className="text-red-500" />, change: '+2%', trend: 'up' },
            { title: 'Steps', value: '8,243', unit: 'steps', icon: <Activity className="text-blue-500" />, change: '+12%', trend: 'up' },
            { title: 'Hydration', value: '2.4', unit: 'L', icon: <Droplet className="text-cyan-500" />, change: '-5%', trend: 'down' },
            { title: 'Sleep', value: '7.5', unit: 'hrs', icon: <Sleep className="text-indigo-500" />, change: '+8%', trend: 'up' },
          ].map((metric, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-gray-500 dark:text-gray-400">{metric.title}</div>
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                  {metric.icon}
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</span>
                <span className="ml-1 text-gray-600 dark:text-gray-400">{metric.unit}</span>
              </div>
              <div className={`mt-2 text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change} from last week
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Heart Rate</h3>
              <LineChart size={18} className="text-gray-500" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={healthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.375rem',
                    }} 
                  />
                  <Line type="monotone" dataKey="heartRate" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Daily Steps</h3>
              <BarChart size={18} className="text-gray-500" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={healthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.375rem',
                    }} 
                  />
                  <Area type="monotone" dataKey="steps" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
        
        {/* Health insights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-all duration-300 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Health Insights</h3>
          <div className="space-y-6">
            {[
              {
                title: 'Improved sleep quality',
                description: 'Your sleep duration has improved by 8% compared to last week. Keep maintaining a regular sleep schedule.',
                icon: <Sleep className="text-indigo-500" />,
                severity: 'positive'
              },
              {
                title: 'Hydration alert',
                description: 'Your hydration levels are 5% below your weekly average. Try to increase your water intake.',
                icon: <Droplet className="text-cyan-500" />,
                severity: 'warning'
              },
              {
                title: 'Consistent activity',
                description: 'You\'ve maintained consistent physical activity throughout the week. Great job!',
                icon: <Activity className="text-blue-500" />,
                severity: 'positive'
              }
            ].map((insight, index) => (
              <div key={index} className={`flex p-4 rounded-lg ${
                insight.severity === 'positive' ? 'bg-green-50 dark:bg-green-900/20' : 
                insight.severity === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' : 
                'bg-red-50 dark:bg-red-900/20'
              }`}>
                <div className={`flex-shrink-0 p-2 rounded-full mr-4 ${
                  insight.severity === 'positive' ? 'bg-green-100 dark:bg-green-900/30' : 
                  insight.severity === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/30' : 
                  'bg-red-100 dark:bg-red-900/30'
                }`}>
                  {insight.icon}
                </div>
                <div>
                  <h4 className={`font-medium mb-1 ${
                    insight.severity === 'positive' ? 'text-green-800 dark:text-green-300' : 
                    insight.severity === 'warning' ? 'text-yellow-800 dark:text-yellow-300' : 
                    'text-red-800 dark:text-red-300'
                  }`}>
                    {insight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Nutrition tracking */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-md"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nutrition Tracking</h3>
            <Apple size={18} className="text-green-500" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Calories', consumed: 1850, target: 2200, color: 'bg-blue-500' },
              { label: 'Protein', consumed: 85, target: 120, unit: 'g', color: 'bg-red-500' },
              { label: 'Carbs', consumed: 220, target: 275, unit: 'g', color: 'bg-yellow-500' }
            ].map((nutrient, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{nutrient.label}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {nutrient.consumed} / {nutrient.target}{nutrient.unit ? nutrient.unit : ''}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className={`${nutrient.color} h-2.5 rounded-full`} 
                    style={{ width: `${Math.min(100, (nutrient.consumed / nutrient.target) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button className="w-full py-2 text-center text-sm text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200">
              Log Today's Meals
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;