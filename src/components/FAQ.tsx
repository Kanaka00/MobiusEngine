import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const faqs = [
  {
    question: "What is MobiusEngine.ai?",
    answer: "MobiusEngine.ai is a comprehensive AI platform that provides developers and businesses with the tools, models, and infrastructure to build intelligent applications. Our platform offers state-of-the-art AI models, APIs, and SDKs to integrate advanced AI capabilities into your products."
  },
  {
    question: "How does pricing work?",
    answer: "We offer tiered pricing plans based on usage volume and features needed. All plans start with a 14-day free trial. Our Starter plan is ideal for individuals and small projects, Professional for growing businesses, and Enterprise for large-scale operations. Custom pricing is also available for specific needs."
  },
  {
    question: "Do I need machine learning expertise to use MobiusEngine?",
    answer: "No, you don't need extensive machine learning knowledge to use our platform. We've designed MobiusEngine to be accessible to developers of all skill levels. Our APIs and SDKs abstract away the complexity of AI, allowing you to focus on building your application."
  },
  {
    question: "Can I use MobiusEngine.ai with my existing tech stack?",
    answer: "Yes! MobiusEngine.ai is designed to integrate seamlessly with your existing tech stack. We provide SDKs for popular programming languages including JavaScript, Python, Java, Ruby, and more. Our RESTful APIs can be used with any technology that can make HTTP requests."
  },
  {
    question: "What kind of support is available?",
    answer: "All plans include access to our documentation, community forums, and email support. Professional plans include priority support with faster response times. Enterprise plans feature dedicated support with a named account manager and 24/7 emergency assistance."
  },
  {
    question: "How secure is the platform?",
    answer: "Security is our top priority. MobiusEngine.ai employs bank-grade encryption for all data in transit and at rest. We're compliant with major security standards including SOC 2, GDPR, and HIPAA. Enterprise plans include additional security features such as private deployments and custom data residency options."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-4">
            FAQ
          </span>
          <h2 className="mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about MobiusEngine.ai and how it can help your business.
          </p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className={`border-b border-gray-200 ${index === 0 ? 'border-t' : ''}`}
            >
              <button
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;