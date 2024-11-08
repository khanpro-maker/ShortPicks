import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputCart from './InputCart';

const Add = () => {
  const [input, setInput] = useState([]);

  function handleAdd() {
    setInput([...input, Date.now()]);
  }

  function handleRefresh() {
    window.location.href = window.location.href;
  }

  return (
    <div className="relative w-screen h-screen flex flex-col items-center bg-[#D2FF72]">
       <div>
        {input.map((id) => (
          <InputCart key={id} />
        ))}
      </div>
      
      <div className="absolute bottom-14 flex gap-4">
        <motion.button
          onClick={handleAdd}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Add
        </motion.button>
        <motion.button
          onClick={handleRefresh}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-auto h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Refresh
        </motion.button>
      </div>
      
     
    </div>
  );
};

export default Add;