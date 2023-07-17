import { useState, useEffect } from 'react'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Nav from './components/Nav/Nav'
import Locations from './pages/Locations'
import { CheckSession } from './services/Auth'
import { Route, Routes } from 'react-router'

import './App.css'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App