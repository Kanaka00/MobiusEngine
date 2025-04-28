import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

const testimonials = [
  {
    quote: "MobiusEngine has transformed our customer support operations. We've reduced response times by 80% while improving satisfaction scores.",
    author: "Sarah Johnson",
    title: "CTO, TechSolutions Inc.",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg"
  },
  {
    quote: "Implementing AI with MobiusEngine was surprisingly easy. Their platform helped us launch new features in weeks instead of months.",
    author: "Michael Chen",
    title: "Product Director, Innovate Co.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    quote: "The performance and reliability of MobiusEngine's AI models exceeded our expectations. It's been a game-changer for our business.",
    author: "Jessica Williams",
    title: "CEO, FutureTech",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  title: string;
  avatar: string;
}> = ({ quote, author, title, avatar }) => {
  return (
    <motion.div 
      className="card relative quote-mark"
      variants={fadeIn}
    >
      <div className="mb-6">
        <div className="flex mb-1">
          {[1, 2, 3, 4, 5].map(star => (
            <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-8">{quote}</p>
      <div className="flex items-center">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="mb-4">Trusted by <span className="gradient-text">Industry Leaders</span></h2>
          <p className="text-gray-600 text-lg">
            See what our customers are saying about how MobiusEngine.ai has transformed their businesses.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              avatar={testimonial.avatar}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;