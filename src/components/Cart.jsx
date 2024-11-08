import React from 'react'
import Header from './Header';
const Cart = ({ question, ans }) => {
  return (
    <section >
    <div className='w-screen h-screen grid place-items-center cursor:pointer'>
      <div className=' relative w-[337px] h-[529px] bg-blue rounded-[20px]  transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
        <Header />
        <div className='absolute top-40 left-5 right-5 text-white flex flex-col justify-center' >
          <h1 className='text-2xl text-center break-words'>{question}
          </h1>
          <h3 className='text-center mt-5 break-words'>{ans}</h3>
        </div>
        
      </div>
    </div>
</section>
  )
}

export default Cart
