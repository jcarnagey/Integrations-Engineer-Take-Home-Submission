import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Header from './header/Header'
import Login from './auth/Login'
import Signup from './auth/signup/Signup'
import Dashboard from './dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  )
}

export default App
