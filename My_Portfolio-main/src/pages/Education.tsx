import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { TerminalWindow } from '../components/Terminal/TerminalWindow';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 pt-20 px-4 md:px-6 pb-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <TerminalWindow title="~/education - academic.log">
            <div className="space-y-2">
              <div className="text-cyan-400">$ cat /var/log/academic.log</div>
              <div className="text-yellow-400">Academic Journey - Sri Aakash</div>
              <div className="text-gray-400">Displaying {education.length} educational milestones</div>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-green-400 to-yellow-400"></div>

          <div className="space-y-8 md:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot with graduation cap - hidden on mobile */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="hidden md:flex absolute left-4 w-8 h-8 bg-cyan-400 rounded-full border-4 border-black z-10 items-center justify-center"
                >
                  <GraduationCap size={16} className="text-black" />
                </motion.div>

                <div className="md:ml-20">
                  <TerminalWindow title={`${edu.institution.toLowerCase().replace(/\s+/g, '-')}-${edu.period.split(' - ')[0]}`}>
                    <div className="space-y-4 md:space-y-6">
                      {/* Header */}
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-cyan-400">{edu.institution}</h3>
                          <div className="flex items-center space-x-2 text-sm text-yellow-400">
                            <Calendar size={14} />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                          <div className="text-green-400 font-semibold">{edu.degree}</div>
                          <div className="flex items-center space-x-1 text-gray-400 text-sm">
                            <MapPin size={12} />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* Grade Display */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="inline-flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded border border-cyan-400"
                        >
                          <Award size={16} className="text-yellow-400" />
                          <span className="text-cyan-400 font-mono font-bold">{edu.grade}</span>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Key Courses */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-cyan-400 text-sm font-mono">
                          <BookOpen size={16} />
                          <span>Key Courses:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <motion.span
                              key={course}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded border border-gray-700 font-mono"
                            >
                              {course}
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
                          {edu.achievements.map((achievement, i) => (
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
                          <span>Academic Performance: Excellent</span>
                        </div>
                      </div>
                    </div>
                  </TerminalWindow>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <TerminalWindow title="academic-summary">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">8.9</div>
                <div className="text-gray-400 text-sm">Current CGPA</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-2xl md:text-3xl font-bold text-green-400">15+</div>
                <div className="text-gray-400 text-sm">Technical Courses</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">5+</div>
                <div className="text-gray-400 text-sm">Academic Awards</div>
              </motion.div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800 text-center">
              <div className="text-gray-400 text-sm font-mono">
                $ echo "Building the future through continuous learning"
              </div>
              <div className="mt-2 text-cyan-400">
                "Education is the most powerful weapon which you can use to change the world."
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </div>
  );
};