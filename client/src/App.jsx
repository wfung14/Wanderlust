import { useState, useEffect } from 'react'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { CheckSession } from './services/Auth'

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
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes >
            <Route path="/locations" element={<Locations />} />
            <Route path="/*" element={<Navigate to="/locations" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
          </Routes> 
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App