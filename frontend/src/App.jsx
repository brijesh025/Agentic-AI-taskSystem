import { useState } from 'react'
import './App.css'
import CheckAuth from './components/checkAuth'
import Ticket from './pages/Ticket'
import Tickets from './pages/Tickets'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Admin from './pages/Admin'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/' 
        element={<CheckAuth isProtected={true}><Tickets/></CheckAuth>} />
      <Route path='/tickets/:id'
        element={<CheckAuth isProtected={true}><Ticket/></CheckAuth>}/>
      <Route path='login' 
        element={<CheckAuth isProtected={false}><Login/></CheckAuth>}/>
      <Route path='signup' 
        element={<CheckAuth isProtected={false}><Signup/></CheckAuth>}/>
      <Route path='admin' 
        element={<CheckAuth isProtected={true}><Admin/></CheckAuth>}/>
    </Routes>
  )
}

export default App
