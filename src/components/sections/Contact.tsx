import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isHovered, setIsHovered] = useState({
    contactCard: false,
    formCard: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  const cardVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.9,
      background: 'linear-gradient(135deg, #1e293b, #0f172a)'
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: 'spring',
        stiffness: 120
      }
    },
    hover: { 
      scale: 1.05,
      rotate: 5,
      background: 'linear-gradient(135deg, #1e40af, #111827)',
      transition: { 
        duration: 0.3,
        type: 'tween'
      }
    }
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full space-y-8">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl font-extrabold text-[#ffcc00]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            key={Math.random()}
          >
            Contact Me
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-[#ffcc00]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            key={Math.random()}
          >
            Get in touch for collaboration or just to say hello!
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setIsHovered(prev => ({ ...prev, contactCard: true }))}
            onHoverEnd={() => setIsHovered(prev => ({ ...prev, contactCard: false }))}
            className="bg-black rounded-xl p-8 shadow-2xl overflow-hidden border-2 border-[#00ff88]"
            whileHover={{ boxShadow: '0 0 20px #00ff88', scale: 1.05, rotate: 5 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-2xl blur-3xl -z-10"
              style={{ background: 'radial-gradient(circle at center, rgba(255, 204, 0, 0.5), transparent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="space-y-4">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Mail className={`${isHovered.contactCard ? 'text-blue-300' : 'text-blue-400'} w-10 h-10 transition-colors`} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <p className="text-gray-300">vishwakarmadishant4@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <MessageCircle className={`${isHovered.contactCard ? 'text-green-300' : 'text-green-400'} w-10 h-10 transition-colors`} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Direct Messages</h3>
                  <p className="text-gray-300">Always open for conversations</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setIsHovered(prev => ({ ...prev, formCard: true }))}
            onHoverEnd={() => setIsHovered(prev => ({ ...prev, formCard: false }))}
            className="bg-black rounded-xl p-8 shadow-2xl overflow-hidden border-2 border-[#00ff88]"
            whileHover={{ boxShadow: '0 0 20px #00ff88', scale: 1.05, rotate: 5 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-2xl blur-3xl -z-10"
              style={{ background: 'radial-gradient(circle at center, rgba(255, 204, 0, 0.5), transparent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.form 
              onSubmit={handleSubmit} 
              variants={inputVariants}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <motion.div variants={inputVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)'
                  }}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 text-white transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)'
                  }}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 text-white transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)'
                  }}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 text-white transition-all duration-300"
                />
              </motion.div>
              <motion.div 
                variants={inputVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Send className="mr-2 w-5 h-5" /> Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
