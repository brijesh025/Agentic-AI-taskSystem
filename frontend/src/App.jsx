import { useState } from 'react'
import './App.css'
import CheckAuth from './components/checkAuth'
import Ticket from './pages/ticket'
import Tickets from './pages/tickets'
import Login from './pages/login'
import Signup from './pages/signup'
import Admin from './pages/admin'

function App() {

  return (
    <Routes>
      <Route path='/' 
        element={<CheckAuth protected={true}><Tickets/></CheckAuth>} />
      <Route path='/tickets/:id'
        element={<CheckAuth protected={true}><Ticket/></CheckAuth>}/>
      <Route path='login' 
        element={<CheckAuth protected={false}><Login/></CheckAuth>}/>
      <Route path='signup' 
        element={<CheckAuth protected={false}><Signup/></CheckAuth>}/>
      <Route path='admin' 
        element={<CheckAuth protected={true}><Admin/></CheckAuth>}/>
    </Routes>
  )
}

export default App
