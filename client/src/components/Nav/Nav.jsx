import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/locations"> Locations </Link>
        <Link onClick={handleLogOut} to="/"> Sign Out </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      {/* <Link to="/">Home</Link> */}
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div>
          <h1>Wanderlust</h1>
        </div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav