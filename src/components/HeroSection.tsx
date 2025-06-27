import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cog, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const cogRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Additional animation logic could be added here if needed
  }, []);
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 to-gray-100 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Seamless System Integration Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We connect your critical business systems and optimize workflows 
              with cutting-edge integration technologies. Experience enhanced 
              efficiency and transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#services"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Our Services
              </a>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          {/* Right animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border-4 border-[#283e80] flex items-center justify-center">
                {/* System workflow paths */}
                <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                  <path 
                    d="M100,20 A80,80 0 1,1 20,100" 
                    fill="none" 
                    stroke="#8a8fb9" 
                    strokeWidth="4"
                    strokeDasharray="5,5"
                  />
                  <path 
                    d="M100,20 A80,80 0 1,0 180,100" 
                    fill="none" 
                    stroke=" #8a8fb9"
                    strokeWidth="4"
                  />
                </svg>
                
                {/* Inner circle */}
                <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full bg-white shadow-lg flex items-center justify-center">
                  {/* Animated connection lines */}
                  <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      fill="none" 
                      stroke="#6B7280" 
                      strokeWidth="1"
                      initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                      animate={{ 
                        strokeDasharray: 251, 
                        strokeDashoffset: 502 
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        ease: "linear" 
                      }}
                    />
                  </svg>
                  
                  {/* Data points */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="relative w-full h-full"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                  </motion.div>
                  
                  {/* Rotating gear */}
                  <div className="relative z-10" ref={cogRef}>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Cog className="w-16 h-16 text-blue-800" />
                    </motion.div>
                    <Workflow className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-800" />
                  </div>
                </div>
              </div>
              
              {/* Floating system components */}
              <motion.div 
                className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">API</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-0 bg-white p-2 rounded-full shadow-md"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">DB</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 right-10 bg-white p-2 rounded-full shadow-md"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs font-bold">UI</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 md:h-16">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-white"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-white"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;