import React from 'react'
import { useQNA } from './store/store';
import Add from './components/Add';
const App = () => {
    const {question,ans} = useQNA();
    console.log(question)
    console.log(ans)
  return (
    <div>
     {/* <InputCart/> */}
     <Add/>
    </div>
  )
}

export default App;