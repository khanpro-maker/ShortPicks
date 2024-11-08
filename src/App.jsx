import React from 'react'
import { useQNA } from './store/store';
import Add from './components/Add';
import CartMain from './pages/CartMain';
const App = () => {
    const {question,ans} = useQNA();
    console.log(question)
    console.log(ans)
  return (
    <div>
    <CartMain/>
    </div>
  )
}

export default App;