import React from 'react';
import { motion } from 'framer-motion';

interface CommandPromptProps {
  user?: string;
  host?: string;
  path?: string;
  children?: React.ReactNode;
}

export const CommandPrompt: React.FC<CommandPromptProps> = ({
  user = "sri-aakash",
  host = "arch",
  path = "~",
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-1 text-green-400"
    >
      <span className="text-cyan-400">{user}</span>
      <span className="text-white">@</span>
      <span className="text-cyan-400">{host}</span>
      <span className="text-white">:</span>
      <span className="text-blue-400">{path}</span>
      <span className="text-white">$</span>
      {children && <span className="ml-2">{children}</span>}
    </motion.div>
  );
};