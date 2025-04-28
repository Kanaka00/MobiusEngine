import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-90 bg-gradient-to-br from-primary-600 to-purple-700"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of innovative companies using MobiusEngine.ai to build the future today. Try it free for 14 days, no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="#" 
              className="btn bg-white text-primary-700 hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#" 
              className="btn border border-white/30 text-white hover:bg-white/10"
            >
              Schedule Demo
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-sm text-white/80">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Full access for 14 days
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;