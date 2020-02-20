import React from "react"
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom"
import Home from "./Home"
import About from "./About"

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <NavLink to="/" activeClassName="active" exact>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact active />
        <Route path="/about" component={About} exact />
        <Route path="/*" render={() => <h1>404 Page not found</h1>} />
      </Switch>
    </Router>
  )
}

export default App
