import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Header from './header/Header'
import Login from './auth/Login'
import Signup from './auth/signup/Signup'
import Dashboard from './dashboard/Dashboard'
import User from './models/User'
import CreateUser from './models/CreateUser'
import UpdateUser from './models/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/user' element={<User></User>}></Route>
        <Route path='/create-user' element={<CreateUser></CreateUser>}></Route>
        <Route path='/update-user/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </>
  )
}

export default App
