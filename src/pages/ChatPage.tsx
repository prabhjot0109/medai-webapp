import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, PaperclipIcon, Mic, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your Med.ai assistant. How can I help you with your health today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      setIsTyping(false);
      
      // Sample responses for demo
      const responses = [
        "Based on your symptoms, it could be seasonal allergies. I recommend taking an antihistamine and monitoring for improvement.",
        "Your health metrics look good overall. I'd suggest increasing your daily water intake to improve hydration levels.",
        "Those symptoms could be related to several conditions. It would be best to consult with a healthcare provider for a proper diagnosis.",
        "According to recent research, regular exercise can significantly reduce the risk of developing that condition."
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Chat header */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Bot size={24} className="text-primary-600 dark:text-primary-400 mr-3" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Med.ai Assistant</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ask me anything about your health</p>
              </div>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="h-[calc(70vh-10rem)] overflow-y-auto p-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-2'}`}>
                  <div className={`p-4 rounded-lg ${message.sender === 'user' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>
                    <p>{message.content}</p>
                  </div>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'} text-gray-500 dark:text-gray-400`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'order-1 mr-2 bg-gray-200 dark:bg-gray-600' : 'order-1 mr-2 bg-primary-100 dark:bg-primary-900'}`}>
                  {message.sender === 'user' ? (
                    <User size={16} className="text-gray-600 dark:text-gray-300" />
                  ) : (
                    <Bot size={16} className="text-primary-600 dark:text-primary-400" />
                  )}
                </div>
              </div>
            ))}
            
            {/* AI typing indicator */}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-100 dark:bg-primary-900 mr-2">
                  <Bot size={16} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="max-w-[80%]">
                  <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={endOfMessagesRef} />
          </div>
          
          {/* Chat input */}
          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                <PaperclipIcon size={20} />
              </button>
              <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 mr-2">
                <Mic size={20} />
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your health question..."
                className="flex-1 py-2 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ''}
                className={`ml-2 p-2 rounded-full ${inputMessage.trim() !== '' ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-gray-200 text-gray-400 dark:bg-gray-700'} transition-colors duration-200`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Note: This is a demo of the Med.ai chat interface. In a real application, responses would be generated by our sophisticated AI models.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatPage;