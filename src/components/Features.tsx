import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Lock, BarChart3, Share2, Cpu } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art models trained on diverse datasets for unparalleled performance.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized infrastructure delivers responses in milliseconds, even for complex queries.'
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with leading security standards and regulations.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Detailed Analytics',
    description: 'Gain insights into usage patterns and performance metrics to optimize your AI applications.'
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and workflows through our comprehensive API.'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Scalable Infrastructure',
    description: 'Built for scale with automatic resource allocation to handle traffic spikes effortlessly.'
  }
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="card hover:shadow-md group"
      variants={fadeIn}
    >
      <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary-100 group-hover:text-primary-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-4">
            Features
          </span>
          <h2 className="mb-4">Everything You Need for <span className="gradient-text">AI Excellence</span></h2>
          <p className="text-gray-600 text-lg">
            Our platform provides the tools, models, and infrastructure to build and deploy intelligent applications at any scale.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;