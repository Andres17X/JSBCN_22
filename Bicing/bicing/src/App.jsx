import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Bicing from './Bicing'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Bicing />
   </>
  )
}

export default App
