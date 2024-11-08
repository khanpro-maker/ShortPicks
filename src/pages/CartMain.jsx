import React from 'react'
import Add from '../components/Add'
import Intial from '../components/Intial'
import { useState } from 'react'
import { useEffect } from 'react'
import BackgroundVideo from '../components/Background'
const CartMain = () => {
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
       const timer =  setTimeout(()=>{
            setLoading(false)
        },5000)
        return ()=>clearTimeout(timer)
    },[])
  return (
    <div>
      {loading ? <Intial/>:<Add/> }
    </div>
  )
}

export default CartMain
