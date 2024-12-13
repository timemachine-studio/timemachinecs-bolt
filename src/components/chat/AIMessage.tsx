import React from 'react';
import { motion } from 'framer-motion';
import { MessageProps } from '../../types/chat';
import { fadeInScale, textGlowStyle } from '../../utils/animations';

export function AIMessage({ content }: MessageProps) {
  return (
    <motion.div
      {...fadeInScale}
      className="text-center px-8 max-w-5xl mx-auto"
    >
      <motion.p
        className="ai-message text-5xl md:text-6xl lg:text-7xl font-bold text-white"
        style={textGlowStyle}
      >
        {content}
      </motion.p>
    </motion.div>
  );
}