import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Lock, Bell, Loader, ChevronDown, ChevronUp, Calendar, Edit2 } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [medicalHistoryExpanded, setMedicalHistoryExpanded] = useState(false);
  
  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: <User size={18} /> },
    { id: 'security', label: 'Security', icon: <Lock size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'preferences', label: 'Preferences', icon: <Settings size={18} /> }
  ];
  
  const TabContent: React.FC = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User size={36} className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">John Doe</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">john.doe@example.com</p>
                  <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    Change Photo
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'First Name', value: 'John' },
                      { label: 'Last Name', value: 'Doe' },
                      { label: 'Email', value: 'john.doe@example.com' },
                      { label: 'Phone', value: '+1 (555) 123-4567' },
                      { label: 'Date of Birth', value: 'January 15, 1985' },
                      { label: 'Gender', value: 'Male' }
                    ].map((field, index) => (
                      <div key={index} className="space-y-1">
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                          {field.label}
                        </label>
                        <div className="flex">
                          <input
                            type="text"
                            defaultValue={field.value}
                            className="block w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Medical History</h3>
                <button 
                  onClick={() => setMedicalHistoryExpanded(!medicalHistoryExpanded)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {medicalHistoryExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              
              {medicalHistoryExpanded && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Current Conditions</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Hypertension', 'Mild Asthma'].map((condition, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {condition}
                        </span>
                      ))}
                      <button className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm flex items-center">
                        <Edit2 size={12} className="mr-1" /> Add
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Medications</h4>
                    <div className="space-y-3 mb-4">
                      {[
                        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
                        { name: 'Albuterol Inhaler', dosage: '90mcg', frequency: 'As needed' }
                      ].map((medication, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{medication.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{medication.dosage} - {medication.frequency}</div>
                          </div>
                          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            <Edit2 size={16} />
                          </button>
                        </div>
                      ))}
                      <button className="w-full py-2 px-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                        <Edit2 size={14} className="mr-2" /> Add Medication
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Allergies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Penicillin', 'Peanuts', 'Dust Mites'].map((allergy, index) => (
                        <span key={index} className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">
                          {allergy}
                        </span>
                      ))}
                      <button className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm flex items-center">
                        <Edit2 size={12} className="mr-1" /> Add
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Family History</h4>
                    <div className="space-y-3">
                      {[
                        { condition: 'Diabetes Type 2', relation: 'Father' },
                        { condition: 'Breast Cancer', relation: 'Maternal Grandmother' }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{item.condition}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{item.relation}</div>
                          </div>
                          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                            <Edit2 size={16} />
                          </button>
                        </div>
                      ))}
                      <button className="w-full py-2 px-4 border border-dashed border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                        <Edit2 size={14} className="mr-2" /> Add Family History
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {!medicalHistoryExpanded && (
                <p className="text-gray-600 dark:text-gray-400">
                  Click to expand and view or update your medical history, including conditions, medications, allergies, and family history.
                </p>
              )}
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Appointments</h3>
              
              {/* Appointments list */}
              <div className="space-y-4">
                {[
                  { 
                    title: 'Annual Physical Checkup', 
                    doctor: 'Dr. Sarah Johnson',
                    date: 'June 15, 2025',
                    time: '10:00 AM',
                    location: 'Med.ai Health Clinic'
                  },
                  { 
                    title: 'Dental Cleaning', 
                    doctor: 'Dr. Michael Chang',
                    date: 'July 3, 2025',
                    time: '2:30 PM',
                    location: 'Bright Smile Dental'
                  }
                ].map((appointment, index) => (
                  <div key={index} className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <div className="w-2 bg-primary-600 dark:bg-primary-500"></div>
                    <div className="p-4 flex flex-col md:flex-row w-full">
                      <div className="flex items-center md:w-16 md:border-r md:border-gray-200 md:dark:border-gray-700 pb-3 md:pb-0">
                        <Calendar size={24} className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="md:pl-4 flex-grow">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">{appointment.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {appointment.doctor} · {appointment.date} · {appointment.time}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                          Location: {appointment.location}
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0 flex items-center space-x-2">
                        <button className="py-1 px-3 text-xs font-medium text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200">
                          Reschedule
                        </button>
                        <button className="py-1 px-3 text-xs font-medium text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-3 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-primary-600 dark:text-primary-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  Schedule New Appointment
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Password & Authentication</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="block w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="block w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="block w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors duration-200">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Add an extra layer of security to your account</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        We'll send a verification code to your phone each time you sign in
                      </p>
                    </div>
                    <div className="flex items-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connected Devices</h3>
              
              <div className="space-y-4">
                {[
                  { device: 'MacBook Pro', location: 'San Francisco, CA', lastActive: 'Now', current: true },
                  { device: 'iPhone 14', location: 'San Francisco, CA', lastActive: '4 hours ago', current: false },
                  { device: 'Windows PC', location: 'San Jose, CA', lastActive: '2 days ago', current: false }
                ].map((session, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-md">
                    <div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 dark:text-white">{session.device}</span>
                        {session.current && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {session.location} · {session.lastActive}
                      </div>
                    </div>
                    {!session.current && (
                      <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium transition-colors duration-200">
                        Sign Out
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-end">
                <button className="py-2 px-4 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium transition-colors duration-200">
                  Sign Out of All Devices
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data Privacy</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="data-sharing"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                    />
                  </div>
                  <label htmlFor="data-sharing" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                    Share anonymized health data to improve Med.ai's algorithms
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Your data is fully anonymized and will only be used for improving our health predictions
                    </p>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="research"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                    />
                  </div>
                  <label htmlFor="research" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                    Participate in health research studies
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      You'll be notified about research opportunities that match your profile
                    </p>
                  </label>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="tracking"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600"
                    />
                  </div>
                  <label htmlFor="tracking" className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                    Allow cookies and analytics tracking
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      This helps us improve your experience and understand how users interact with Med.ai
                    </p>
                  </label>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm font-medium transition-colors duration-200">
                  Download My Data
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Request a complete copy of all your personal data stored in Med.ai
                </p>
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
            <Loader size={48} className="mx-auto mb-4 text-gray-400 dark:text-gray-600 animate-spin" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              This section is under development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're working hard to bring you new features. Please check back soon!
            </p>
          </div>
        );
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Your Profile</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <nav className="flex flex-col">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-3 text-sm font-medium ${
                        activeTab === tab.id 
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-l-4 border-primary-600 dark:border-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200'
                      }`}
                    >
                      <div className="mr-3">{tab.icon}</div>
                      {tab.label}
                    </button>
                  ))}
                </nav>
                
                <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <button className="w-full py-2 text-center text-sm text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200">
                      Help Center
                    </button>
                    <button className="w-full py-2 text-center text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200">
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-grow">
              <TabContent />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;