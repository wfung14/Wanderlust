import { useState } from 'react'

import './App.css'

const App = () => {


  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes >
            <Route path="/locations" element={<Locations />} />
            <Route path="/*" element={<Navigate to="/locations" />} />
          </Routes> 
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App