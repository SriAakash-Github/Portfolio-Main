import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TerminalWindow } from '../components/Terminal/TerminalWindow';
import { TypingEffect } from '../components/Terminal/TypingEffect';
import { CommandPrompt } from '../components/Terminal/CommandPrompt';
import { GargantuaBlackHole } from '../components/Effects/GargantuaBlackHole';
import { FaTerminal } from 'react-icons/fa';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [terminalInput, setTerminalInput] = useState('');

  const commands = [
    "whoami",
    "cat /etc/motd",
    "ls -la ~/skills",
    "systemctl status developer.service"
  ];

  const responses = [
    "Sri Aakash-AI/ML Enthusiats & Developer | Summer Intern @ Mphasis | Pre-final Year Engineering Student",
    "Welcome to my digital workspace!\nArchitecting solutions one commit at a time.",
    "Frontend: JavaScript, React.js, Streamlit\nBackend: Node.js, Flask, Java, .Net\nDevOps: Docker, AWS",
    "● developer.service - Software Engineer\n   Loaded: loaded (/usr/lib/systemd/system/developer.service; enabled)\n   Active: active (running) since 2020-01-01\n   Status: \"Ready to build amazing things\""
  ];

  // Command handler
  const handleCommand = (input: string) => {
    const trimmed = input.trim();
    let output = '';
    if (trimmed === 'help') {
      output = 'Available commands: help, about, clear, echo <text>';
    } else if (trimmed === 'about') {
      output = 'Sri Aakash - AI/ML & Full Stack Developer. Passionate about scalable apps, open source, and tech-creativity.';
    } else if (trimmed === 'clear') {
      setTerminalHistory([]);
      return;
    } else if (trimmed.startsWith('echo ')) {
      output = trimmed.slice(5);
    } else if (trimmed.length === 0) {
      output = '';
    } else {
      output = `Unknown command: ${trimmed}`;
    }
    setTerminalHistory(prev => [...prev, `$ ${input}`, output]);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(terminalInput);
      setTerminalInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 pt-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TerminalWindow title="~/portfolio - zsh">
              <div className="space-y-4">
                {commands.slice(0, currentStep + 1).map((command, index) => (
                  <div key={index} className="space-y-2">
                    <CommandPrompt>
                      <TypingEffect
                        text={command}
                        speed={100}
                        onComplete={() => {
                          if (index === currentStep) {
                            setTimeout(() => setCurrentStep(prev => prev + 1), 1000);
                          }
                        }}
                      />
                    </CommandPrompt>
                    {index < currentStep && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gray-300 ml-4 whitespace-pre-line"
                      >
                        {responses[index]}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {currentStep >= commands.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pt-4 md:pt-6 space-y-4"
                  >
                    <CommandPrompt>
                      <span className="text-yellow-400">Available commands:</span>
                    </CommandPrompt>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 ml-4">
                      {[
                        { cmd: './projects', desc: 'View projects', path: '/projects' },
                        { cmd: './skills', desc: 'Check skills', path: '/skills' },
                        { cmd: './experience', desc: 'Career path', path: '/experience' },
                        { cmd: './education', desc: 'Academic journey', path: '/education' },
                        { cmd: './contact', desc: 'Get in touch', path: '/contact' },
                      ].map((item, index) => (
                        <motion.button
                          key={item.cmd}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            scale: 1.05,
                            textShadow: "0 0 8px #00ffff"
                          }}
                          onClick={() => navigate(item.path)}
                          className="text-left p-3 rounded border border-gray-700 hover:border-cyan-400 hover:bg-gray-900 transition-all duration-200"
                        >
                          <div className="text-cyan-400 font-mono text-sm md:text-base">{item.cmd}</div>
                          <div className="text-gray-500 text-xs">{item.desc}</div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </TerminalWindow>
          </motion.div>

          {/* 3D Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-6 md:space-y-8"
          >
            <GargantuaBlackHole />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center space-y-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Sri Aakash
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-mono">
                 AI/ML & Full Stack Developer
              </p>
              <p className="text-sm md:text-base text-gray-500 max-w-md px-4 md:px-0">
                Passionate about building scalable applications, contributing to open source, 
                and exploring the intersection of technology and creativity.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 px-4 md:px-6 py-2 z-40"
        >
          <div className="container mx-auto flex items-center justify-between text-xs md:text-sm font-mono">
            <div className="flex items-center space-x-4">
              <span className="text-green-400">●</span>
              <span className="text-gray-400">Online</span>
              <span className="hidden sm:inline text-gray-600">|</span>
              <span className="text-cyan-400">~/portfolio</span>
              <button
                aria-label="Open Terminal"
                className="ml-4 text-cyan-400 hover:text-cyan-200 focus:outline-none"
                onClick={() => setShowTerminal(true)}
              >
                <FaTerminal size={18} />
              </button>
            </div>
            <div className="text-gray-400 hidden md:block">
              Press F1-F6 for navigation
            </div>
          </div>
        </motion.div>

        {/* Terminal Pop-up Modal */}
        {showTerminal && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black bg-opacity-60">
            <div className="relative w-full max-w-2xl mx-auto mb-0 md:mb-12">
              <TerminalWindow title="~/interactive-terminal" className="">
                <div className="h-64 overflow-y-auto mb-4 pr-2 custom-scrollbar">
                  {terminalHistory.length === 0 ? (
                    <div className="text-gray-500">Type 'help' to see available commands.</div>
                  ) : (
                    terminalHistory.map((line, idx) => (
                      <div key={idx} className="whitespace-pre-line">{line}</div>
                    ))
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <CommandPrompt>
                    <input
                      type="text"
                      className="bg-transparent outline-none border-b border-cyan-400 text-green-400 font-mono w-full px-2 py-1"
                      value={terminalInput}
                      onChange={e => setTerminalInput(e.target.value)}
                      onKeyDown={handleInputKeyDown}
                      autoFocus
                      spellCheck={false}
                      placeholder="Type a command..."
                    />
                  </CommandPrompt>
                  <button
                    aria-label="Close Terminal"
                    className="ml-2 px-2 py-1 text-red-400 hover:text-red-200 focus:outline-none"
                    onClick={() => setShowTerminal(false)}
                  >
                    ✕
                  </button>
                </div>
              </TerminalWindow>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};