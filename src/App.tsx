import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let Hi : boolean
  Hi = false


  const returnHi = (): string =>{
 
    return "Hi"
  }

  return (
    <>
    {console.log(Hi)}
    {returnHi}
      
    </>
  )
}

export default App
