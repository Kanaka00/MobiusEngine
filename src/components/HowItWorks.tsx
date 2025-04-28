import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '../utils/animations';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Integrate the MobiusEngine API with your application using our SDKs for various programming languages.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    {
      number: '02',
      title: 'Configure',
      description: 'Customize AI models and parameters to perfectly match your specific use case requirements.',
      image: 'https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg'
    },
    {
      number: '03',
      title: 'Deploy',
      description: 'Launch your AI-powered features with one-click deployment to our global infrastructure.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg'
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="mb-4">Simple <span className="gradient-text">Three-Step</span> Process</h2>
          <p className="text-gray-600 text-lg">
            We've simplified AI integration so you can focus on building amazing products. Get started in minutes, not months.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <motion.div 
                className="w-full lg:w-1/2"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <span className="inline-block text-8xl font-bold text-gray-100 absolute -left-6 -top-10 z-0">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <a href="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full lg:w-1/2"
                variants={index % 2 === 0 ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={step.image} 
                    alt={`Step ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;