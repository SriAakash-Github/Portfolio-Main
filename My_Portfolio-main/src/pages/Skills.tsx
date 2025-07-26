import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { TerminalWindow } from '../components/Terminal/TerminalWindow';

const categoryColors = {
  frontend: '#00ffff',
  backend: '#00ff00',
  aiml: '#ff6b6b',
  aimltech: '#ffd700',
  devops: '#ff8800',
  tools: '#ff00ff'
};

const categoryIcons = {
  frontend: '🎨',
  backend: '⚙️',
  aiml: '🤖',
  aimltech: '🧰',
  devops: '🚀',
  tools: '🔧'
};

export const Skills: React.FC = () => {
  const categories = Object.keys(categoryColors) as Array<keyof typeof categoryColors>;

  return (
    <div className="min-h-screen bg-black text-green-400 pt-20 px-4 md:px-6 pb-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <TerminalWindow title="~/skills - htop">
            <div className="space-y-2">
              <div className="text-cyan-400">$ systemctl status skills.service --user sri-aakash</div>
              <div className="text-green-400">● skills.service - Developer Skills Monitor</div>
              <div className="text-gray-400">   Loaded: loaded (/usr/lib/systemd/system/skills.service; enabled)</div>
              <div className="text-gray-400">   Active: active (running)</div>
            </div>
          </TerminalWindow>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: category === 'frontend' || category === 'devops' ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categories.indexOf(category) * 0.1 }}
              >
                <TerminalWindow title={`${category}-monitor`}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 pb-2 border-b border-gray-800">
                      <span className="text-2xl">{categoryIcons[category]}</span>
                      <h3 className="text-xl font-bold capitalize" style={{ color: categoryColors[category] }}>
                        {category === 'aiml' ? 'AI/ML' : category === 'aimltech' ? 'Tech for AI/ML' : category}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (categories.indexOf(category) * 0.1) + (index * 0.05) }}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: "rgba(0, 255, 255, 0.05)"
                          }}
                          className="p-3 rounded border border-gray-800 hover:border-cyan-400 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-mono text-sm md:text-base">{skill.name}</span>
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                                color: [categoryColors[category], '#ffffff', categoryColors[category]]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: index * 0.2
                              }}
                              className="text-lg"
                            >
                              ●
                            </motion.div>
                          </div>
                          
                          {/* Animated skill indicator */}
                          <div className="flex space-x-1 mt-2">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 3 }}
                                animate={{ 
                                  height: i < (skill.level / 10) ? 
                                    Math.random() * 6 + 3 : 2,
                                  backgroundColor: i < (skill.level / 10) ? 
                                    categoryColors[category] : '#374151'
                                }}
                                transition={{ 
                                  duration: 0.5,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  delay: i * 0.1
                                }}
                                className="flex-1 rounded-sm"
                              />
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-800 text-xs text-gray-500 font-mono flex flex-col sm:flex-row sm:justify-between gap-1">
                      <span>CPU: {Math.floor(Math.random() * 30 + 60)}%</span>
                      <span>MEM: {Math.floor(Math.random() * 40 + 40)}%</span>
                      <span>Load: {(Math.random() * 2 + 1).toFixed(2)}</span>
                    </div>
                  </div>
                </TerminalWindow>
              </motion.div>
            );
          })}
        </div>

        {/* System Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <TerminalWindow title="system-info">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
              <div>
                <div className="text-cyan-400 mb-2">System Status</div>
                <div className="space-y-1 text-gray-400">
                  <div>Uptime: 1 years, 21 days</div>
                  <div>Last commit: 2 hours ago</div>
                  <div>Productivity: 99.9%</div>
                </div>
              </div>
              
              <div>
                <div className="text-green-400 mb-2">Learning Queue</div>
                <div className="space-y-1 text-gray-400">
                  <div>• Agentic AI</div>
                  <div>• Deep Learning</div>
                  <div>• Cyber Security</div>
                </div>
              </div>
              
              <div>
                <div className="text-yellow-400 mb-2">Current Focus</div>
                <div className="space-y-1 text-gray-400">
                  <div>• React 18 Features</div>
                  <div>• Backend Development</div>
                  <div>• Devops/ CI/CD</div>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </div>
  );
};