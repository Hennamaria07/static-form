import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path ="/"
        element={<Login />}
        />
      </Routes>
      <Routes>
        <Route 
        path ="/sign-up"
        element={<SignUp />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
