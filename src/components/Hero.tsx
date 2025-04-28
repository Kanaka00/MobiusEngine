import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '../utils/animations';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-100/40 blur-[100px]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-100/40 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Introducing MobiusEngine.ai
            </motion.span>
            <h1 className="mb-6 font-bold">
              Powering the Future with 
              <span className="gradient-text block"> Intelligent AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Unlock unprecedented capabilities with our cutting-edge AI platform. Build, deploy, and scale intelligent solutions faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Get Started Free
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#demo" className="btn-secondary">
                Watch Demo
              </a>
            </div>
            
            <div className="mt-10 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p><span className="font-semibold text-gray-700">1,000+</span> companies already onboard</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur-sm z-10 rounded-2xl"></div>
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                alt="AI Visualization" 
                className="w-full h-auto rounded-2xl relative z-0"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Brands */}
        <motion.div 
          className="mt-20 pt-10 border-t border-gray-100"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm text-center text-gray-500 mb-8">TRUSTED BY LEADING COMPANIES</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['Google', 'Microsoft', 'Amazon', 'Salesforce', 'IBM', 'Oracle'].map((brand) => (
              <div key={brand} className="text-gray-400 font-semibold text-lg">
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;