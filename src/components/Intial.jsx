import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex-col text-white text-center">
    <motion.div
      className="text-8xl font-bold mb-4"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      O
    </motion.div>
    <p className="text-lg mt-4 px-4 max-w-md">
      Welcome! Once the app loads, you can click the "Add" button to create a new Shortpick. But You have reload every time to create New shortpicks dont worry all your question and answer are saved!🤯
    </p>
  </div>
);

export default Loading;