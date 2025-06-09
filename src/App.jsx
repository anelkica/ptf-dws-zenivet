import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router"

import Register from './routes/Register/Register'
import Login from './routes/Login/Login'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
