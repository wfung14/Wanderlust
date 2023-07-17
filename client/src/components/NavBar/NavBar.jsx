const NavBar = ({ user, setUser }) => {

  return(
    <nav>
      <Link to="/locations">Locations</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

export default NavBar