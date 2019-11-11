import React from "react"
import api from "../api"
import logo from "../logo.svg"
import { Link, NavLink } from "react-router-dom"
import { withRouter } from "react-router"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <nav className="NavBar">
      <Navbar bg="$primary">
        <Navbar.Brand href="/">Bold Beers</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/beers">My Beers</Nav.Link>
          <Nav.Link href="/add-beer">Add Beer</Nav.Link>
          {!api.isLoggedIn() && <Nav.Link href="/signup">Signup</Nav.Link>}
          {!api.isLoggedIn() && <Nav.Link href="/login">Login</Nav.Link>}
          {api.isLoggedIn() && (
            <Nav.Link href="/" onClick={handleLogoutClick} exact>
              Log out
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </nav>
  )
}

export default withRouter(MainNavbar)
