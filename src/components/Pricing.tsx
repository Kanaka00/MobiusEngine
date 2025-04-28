import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        { included: true, text: '1M API calls per month' },
        { included: true, text: 'Access to basic AI models' },
        { included: true, text: 'Standard support' },
        { included: true, text: 'Basic analytics' },
        { included: false, text: 'Custom model training' },
        { included: false, text: 'Private deployment' }
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Professional',
      description: 'For growing businesses and teams',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        { included: true, text: '5M API calls per month' },
        { included: true, text: 'Access to all AI models' },
        { included: true, text: 'Priority support' },
        { included: true, text: 'Advanced analytics' },
        { included: true, text: 'Custom model fine-tuning' },
        { included: false, text: 'Private deployment' }
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and complex needs',
      monthlyPrice: 499,
      annualPrice: 4990,
      features: [
        { included: true, text: 'Unlimited API calls' },
        { included: true, text: 'Access to all AI models' },
        { included: true, text: '24/7 dedicated support' },
        { included: true, text: 'Enterprise analytics' },
        { included: true, text: 'Custom model training' },
        { included: true, text: 'Private deployment' }
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-4">
            Pricing
          </span>
          <h2 className="mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="text-gray-600 text-lg mb-8">
            Choose the plan that works best for your needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex justify-center items-center mb-8">
            <div className="bg-gray-100 p-1.5 rounded-full flex w-full max-w-xs">
              <button
                className={`flex-1 px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
                  !annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`flex-1 px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
                  annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual
              </button>
            </div>
          </div>
          {annual && (
            <p className="text-sm text-green-600 font-medium">
              Save up to 15% with annual billing
            </p>
          )}
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className={`card border ${
                plan.highlighted 
                  ? 'border-primary-500 relative overflow-hidden shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${annual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                {annual && (
                  <div className="mt-2">
                    <span className="text-sm text-gray-500 line-through">
                      ${plan.monthlyPrice * 12}/year
                    </span>
                    <span className="text-sm text-green-600 font-medium ml-2">
                      ${plan.annualPrice}/year
                    </span>
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? 'gradient-bg text-white hover:opacity-90'
                    : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center text-sm text-gray-500">
          Need a custom plan? <a href="#contact" className="text-primary-600 font-medium hover:text-primary-700">Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;