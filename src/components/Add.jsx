import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputCart from './InputCart';

const Add = () => {
  const [input, setInput] = useState([]);

  function handleAdd() {
    setInput([...input, Date.now()]); 
  }

  return (
    <div className='relative w-screen h-screen flex flex-col items-center bg-[#D2FF72]'>
      <div className='absolute bottom-9 bg-red-600 rounded-full hover:bg-slate-500'>
        <motion.button 
          onClick={handleAdd} 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className='w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl'>
          +
        </motion.button>
      </div>
      <div className='mt-10'>
        {input.map((id) => (
          <InputCart key={id} /> 
        ))}
      </div>
    </div>
  );
}

export default Add;