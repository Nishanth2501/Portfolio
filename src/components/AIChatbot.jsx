import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X } from 'lucide-react';
import { profileData } from '../data/profileData';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Hello! I'm Nishanth Reddy's AI assistant. I can tell you about his skills, projects, experience, and more. What would you like to know?`
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Simple keyword-based responses (you can enhance this with actual AI API later)
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology')) {
      return `Nishanth has extensive expertise in:
      • Programming: ${profileData.skills.programming.join(', ')}
      • Frameworks: ${profileData.skills.frameworks.join(', ')}
      • AI/ML: ${profileData.skills.ai_ml.join(', ')}
      • Data Engineering: ${profileData.skills.data_engineering.join(', ')}
      • Visualization: ${profileData.skills.visualization.join(', ')}
      • Cloud & Databases: ${profileData.skills.cloud_databases.join(', ')}
      • Tools: ${profileData.skills.tools.join(', ')}
      
      He's particularly strong in Python, SQL, FastAPI, LangChain, and Azure technologies.`;
    }
    
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work')) {
      return `Nishanth has worked on several impressive projects:
      
      **Current Projects:**
      • Digital Campus Advisor (NeuralApps.ai) - RAG-powered AI advisor for university students
      • Healthcare Analytics Platform (CitiusTech) - Fraud detection and demand forecasting models
      
      **Key Achievements:**
      • 25% efficiency improvement in data pipelines
      • Built predictive models using LightGBM, XGBoost, and Autoencoders
      • Developed REST APIs with FastAPI for real-time ML integration
      • Currently prototyping with LangChain, vector databases, and Azure ML
      
      Check out his GitHub: ${profileData.personal.github}`;
    }
    
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('background')) {
      return `Nishanth is a Data Science Intern at NeuralApps.ai with 2+ years of experience:
      
      **Current Role:**
      • Data Science Intern at NeuralApps.ai (Jan 2025 - Present)
      • Prototyping Digital Campus Advisor with RAG and Generative AI
      
      **Previous Experience:**
      • Data Scientist at CitiusTech (Jun 2022 - Dec 2024)
      • Data Science Intern at CitiusTech (Jan 2022 - Jun 2022)
      
      **Education:**
      • MBA in Business Analytics (STEM) - Midwestern State University (2024-2025)
      • B.Tech in ECE - ICFAI Business School (2019-2023)
      
      **Certifications:**
      • Microsoft Azure Data Scientist Associate (DP-100)
      • Microsoft Power BI Data Analyst Associate (PL-300)`;
    }
    
    if (lowerQuestion.includes('education') || lowerQuestion.includes('degree')) {
      return `Nishanth's Educational Background:
      
      **Current Studies:**
      • Master of Business Administration (MBA) in Business Analytics (STEM)
      • Midwestern State University, Texas (2024-2025)
      • Focus on data science and strategic decision-making
      
      **Undergraduate:**
      • Bachelor of Technology (B.Tech) in Electronics and Communication Engineering
      • ICFAI Business School (2019-2023)
      • Comprehensive engineering education with technology applications
      
      **Professional Certifications:**
      • Microsoft Azure Data Scientist Associate (DP-100) - Oct 2025
      • Microsoft Power BI Data Analyst Associate (PL-300) - Feb 2025
      • Data Analytics Job Simulation - Deloitte (Forage) - Feb 2025`;
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach')) {
      return `You can reach Nishanth through:
      • Email: ${profileData.personal.email}
      • GitHub: ${profileData.personal.github}
      • LinkedIn: ${profileData.personal.linkedin}
      
      He's always open to discussing new opportunities!`;
    }
    
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
      return `Hello! Welcome to Nishanth Reddy's world! 🚀 I'm here to tell you all about his skills, projects, and experience. What would you like to know?`;
    }
    
    // Default response
    return `I can help you learn about Nishanth's:
    • Technical skills and technologies
    • Projects and work experience
    • Education and certifications
    • Contact information
    
    Please ask me something specific about his background!`;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      type: 'user',
      text: inputText
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(inputText);
      const botMessage = {
        type: 'bot',
        text: response
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <Bot size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Bot className="text-purple-600" size={20} />
                <h3 className="font-semibold text-gray-900 dark:text-white">Nishanth's AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && <Bot size={16} className="mt-1 flex-shrink-0" />}
                      {message.type === 'user' && <User size={16} className="mt-1 flex-shrink-0" />}
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Nishanth's skills, projects, experience..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
