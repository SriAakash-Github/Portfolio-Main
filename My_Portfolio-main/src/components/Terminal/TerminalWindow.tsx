import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal",
  children,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`bg-gray-900 border border-gray-700 rounded-lg shadow-2xl ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-400 font-mono">{title}</div>
        <div className="w-16"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-green-400 bg-black rounded-b-lg">
        {children}
      </div>
    </motion.div>
  );
};