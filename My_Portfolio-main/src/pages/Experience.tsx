import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { TerminalWindow } from '../components/Terminal/TerminalWindow';
import { MapPin, Calendar, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 pt-20 px-4 md:px-6 pb-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <TerminalWindow title="~/experience - career.log">
            <div className="space-y-2">
              <div className="text-cyan-400">$ cat /var/log/career.log</div>
              <div className="text-yellow-400">Professional Journey - Sri Aakash</div>
              <div className="text-gray-400">Displaying {experiences.length} career milestones</div>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-green-400 to-yellow-400"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot - hidden on mobile */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="hidden md:block absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black z-10"
                />

                <div className="md:ml-20">
                  <TerminalWindow title={`${exp.company.toLowerCase().replace(/\s+/g, '-')}-${exp.period.split(' - ')[0]}`}>
                    <div className="space-y-4 md:space-y-6">
                      {/* Header */}
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-cyan-400">{exp.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-yellow-400">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                          <div className="text-green-400 font-semibold">{exp.company}</div>
                          <div className="flex items-center space-x-1 text-gray-400 text-sm">
                            <MapPin size={12} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <div className="text-cyan-400 text-sm font-mono">Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded border border-gray-700 font-mono"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-yellow-400">
                          <Award size={16} />
                          <span className="text-sm font-mono">Key Achievements:</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                              className="flex items-start space-x-2 text-gray-300 text-sm"
                            >
                              <span className="text-green-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Terminal footer */}
                      <div className="pt-3 border-t border-gray-800 text-xs text-gray-500 font-mono">
                        <div className="flex flex-col md:flex-row md:justify-between gap-1">
                          <span>Status: Completed Successfully</span>
                          <span>Impact: High</span>
                        </div>
                      </div>
                    </div>
                  </TerminalWindow>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <TerminalWindow title="career-summary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-2xl md:text-3xl font-bold text-green-400">10+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-gray-400 text-sm">Technologies Worked</div>
              </motion.div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </div>
  );
};