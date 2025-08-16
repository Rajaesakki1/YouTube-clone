import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex vh-100 '>
        <div className='w-25 app-layout  '><Navbar/></div>
        <div className='w-75 main-content  '><Home/></div>
      </div>
    </>
  )
}

export default App
//json-server --watch db.json --port 3001

