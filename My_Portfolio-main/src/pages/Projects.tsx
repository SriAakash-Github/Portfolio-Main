import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { TerminalWindow } from '../components/Terminal/TerminalWindow';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 pt-20 px-4 md:px-6 pb-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <TerminalWindow title="~/projects - tmux">
            <div className="space-y-2">
              <div className="text-cyan-400">$ ls -la ~/projects/</div>
              <div className="text-gray-400">total {projects.length} projects</div>
              <div className="text-yellow-400">Found {projects.length} repositories</div>
            </div>
          </TerminalWindow>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.1)"
              }}
              className="relative group"
            >
              <TerminalWindow title={`${project.title.toLowerCase().replace(/\s+/g, '-')}.git`}>
                <div className="space-y-4 md:space-y-6">
                  {/* Project Image */}
                  {project.imageUrl && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded border border-gray-700"
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-40 md:h-48 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                  )}

                  {/* Project Info */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-bold text-cyan-400">{project.title}</h3>
                      <div className="flex space-x-2">
                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1, color: "#00ffff" }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1, color: "#00ffff" }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(0, 255, 255, 0.1)"
                          }}
                          className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded border border-gray-700 font-mono"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-800">
                      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 text-xs text-gray-500 font-mono">
                        <span>status: ✓ clean</span>
                        <span>build: ✓ passing</span>
                        <span>tests: ✓ 95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TerminalWindow>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <TerminalWindow title="status">
            <div className="text-center space-y-2">
              <div className="text-gray-400">$ echo "More projects available on GitHub"</div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/SriAakash-Github"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-cyan-400 hover:text-cyan-300 underline"
              >
                github.com/SriAakash-Github →
              </motion.a>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </div>
  );
};