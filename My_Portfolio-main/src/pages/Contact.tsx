import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from '../components/Terminal/TerminalWindow';
import { CommandPrompt } from '../components/Terminal/CommandPrompt';
import { socialLinks } from '../data/portfolio';
import { Mail, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-green-400 pt-20 px-4 md:px-6 pb-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <TerminalWindow title="~/contact - mutt">
            <div className="space-y-2">
              <CommandPrompt>
                <span className="text-yellow-400">echo "Let's build something amazing together!"</span>
              </CommandPrompt>
              <div className="text-gray-300">Let's build something amazing together!</div>
            </div>
          </TerminalWindow>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TerminalWindow title="compose-message.sh">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-cyan-400 text-sm mb-2 font-mono">
                        $ whoami
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 md:px-4 py-2 text-green-400 font-mono focus:border-cyan-400 focus:outline-none transition-colors text-sm md:text-base"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-cyan-400 text-sm mb-2 font-mono">
                        $ echo $EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 md:px-4 py-2 text-green-400 font-mono focus:border-cyan-400 focus:outline-none transition-colors text-sm md:text-base"
                        placeholder="your.email@domain.com"
                      />
                    </div>

                    <div>
                      <label className="block text-cyan-400 text-sm mb-2 font-mono">
                        $ cat message.txt
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-3 md:px-4 py-2 text-green-400 font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none text-sm md:text-base"
                        placeholder="Write your message here..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-800 border border-cyan-400 text-cyan-400 py-2 md:py-3 px-4 md:px-6 rounded font-mono hover:bg-cyan-400 hover:text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>./send-message.sh</span>
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4 py-6 md:py-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-400 mx-auto" />
                  </motion.div>
                  <div className="space-y-2">
                    <div className="text-green-400 font-mono">Message sent successfully!</div>
                    <div className="text-gray-400 text-sm">I'll get back to you soon.</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setIsSubmitted(false)}
                    className="text-cyan-400 hover:text-cyan-300 underline font-mono"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              )}
            </TerminalWindow>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Direct Contact */}
            <TerminalWindow title="contact-info">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyan-400" size={20} />
                  <div>
                    <div className="text-cyan-400 font-mono">Primary Email</div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="mailto:sriaakash@yahoo.com"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      sriaakash@yahoo.com
                    </motion.a>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <div className="text-cyan-400 font-mono mb-2">Response Time</div>
                  <div className="text-gray-400 text-sm">
                    Usually within 24 hours
                  </div>
                </div>
              </div>
            </TerminalWindow>

            {/* Social Links */}
            <TerminalWindow title="social-links">
              <div className="space-y-4">
                <div className="text-cyan-400 font-mono mb-4">$ ls ~/social/</div>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-center justify-between p-2 md:p-3 bg-gray-900 border border-gray-700 rounded hover:border-cyan-400 transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                            {link.name[0]}
                          </div>
                          <div>
                            <div className="text-cyan-400 font-mono">{link.name}</div>
                            <div className="text-gray-500 text-xs font-mono">{link.command}</div>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 45 }}
                          className="text-gray-400 group-hover:text-cyan-400 transition-colors"
                        >
                          →
                        </motion.div>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TerminalWindow>

            {/* Availability */}
            <TerminalWindow title="availability">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-400 rounded-full"
                  />
                  <span className="text-green-400 font-mono">Available for new projects</span>
                </div>
                
                <div className="text-gray-400 text-sm space-y-1">
                  <div>• Seeking internship/full-time positions</div>
                  <div>• Ready to Provide Value</div>
                  <div>• Open to freelance opportunities</div>
                </div>

                <div className="pt-3 border-t border-gray-800 text-xs text-gray-500 font-mono">
                  Timezone: UTC-8 (PST) | Status: Online
                </div>
              </div>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </div>
  );
};