import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import {Route, Routes} from 'react-router-dom'
import Messages from './pages/Message/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/messages" element={<Messages />} /> 
    </Routes>
    </>
  )
}

export default App
