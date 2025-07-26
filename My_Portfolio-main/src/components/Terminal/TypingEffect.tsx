import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  cursor?: boolean;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 50,
  onComplete,
  className = "",
  cursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;

    const typeNextCharacter = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        timeoutId = setTimeout(typeNextCharacter, speed);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    };

    typeNextCharacter();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          animate={{ opacity: isComplete ? 0 : [1, 0] }}
          transition={{ 
            duration: 0.5, 
            repeat: isComplete ? 0 : Infinity,
            repeatType: "reverse"
          }}
          className="text-cyan-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
};