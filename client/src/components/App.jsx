import React from "react"
import { Route, Switch } from "react-router-dom"
import MainNavbar from "./MainNavbar"
import Home from "./pages/Home"
import Beers from "./pages/Beers"
import AddBeer from "./pages/AddBeer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/add-beer" component={AddBeer} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
