import React from "react"
import api from "../api"
import logo from "../logo.svg"
import { Link, NavLink } from "react-router-dom"
import { withRouter } from "react-router"

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <nav className="App-header">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/add-beer">Add Beer</NavLink>
      {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
      {api.isLoggedIn() && (
        <Link to="/" onClick={handleLogoutClick}>
          Logout
        </Link>
      )}
    </nav>
  )
}

export default withRouter(MainNavbar)
