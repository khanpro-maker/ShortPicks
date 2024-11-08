import React from 'react'
import { useState, useEffect } from 'react'
import { useQNA } from '../store/store';
import Header from './Header';
import Cart from './Cart';
import { useSwipeable } from 'react-swipeable';
const InputCart = () => {
    const { question, ans, addQuestion, addAns } = useQNA();
    const [temAns, setTemAns] = useState('');
    const [temQus, setTemQus] = useState('');
    const [isSaved, setIsSaved] = useState(false)
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    function handleques(e) {
        setTemQus(e.target.value)
    }
    function handleAns(e) {
        setTemAns(e.target.value)
    }
    function save() {
        if (temAns.trim() && temQus.trim()) {
            addQuestion(temQus)
            addAns(temAns)
            setIsSaved(true)
            setTemAns('')
            setTemQus('')
        }
    }
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (currentCardIndex < question.length - 1) {
                setCurrentCardIndex(currentCardIndex + 1);
            }
        },
        onSwipedRight: () => {
            if (currentCardIndex > 0) {
                setCurrentCardIndex(currentCardIndex - 1);
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });
    console.log(question)
    return (
        <section >
            {!isSaved ? (
                <div className='w-screen h-screen grid place-items-center cursor:pointer'>
                    <div className=' relative w-[337px] h-[529px] bg-blue rounded-[20px]  transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                        <Header />
                        <div id="text" className='absolute top-40 left-5 right-5 text-white flex flex-col justify-center'
                        >

                            <>
                                <h1 className='text-2xl text-center break-words'>
                                    <input type="text"
                                        value={temQus}
                                        placeholder='Enter question'
                                        className='bg-transparent border border-gray-400 rounded-md'
                                        onChange={handleques} />
                                </h1>
                                <h3 className='text-center mt-5 break-words'>
                                    <input type="text"
                                        value={temAns}
                                        placeholder='Enter ans'
                                        className='bg-transparent border border-gray-400 rounded-md'
                                        onChange={handleAns}
                                    />
                                </h3>
                                <button
                                    onClick={save}
                                    className=' inline w-auto h-auto border rounded-full mt-3'>save</button>
                            </>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="absolute top-0 left-0 w-full h-full" {...handlers} >
                    <Cart
                        key={currentCardIndex}
                        question={question[currentCardIndex]}
                        ans={ans[currentCardIndex]}
                    />
                </div>
            )}
        </section>

    )
}

export default InputCart;
