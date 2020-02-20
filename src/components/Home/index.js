import React from "react"
import { Route, Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Route path="/hello" render={() => <h1>Hello Page</h1>} />
      Home Page
      <nav>
        <ul>
          <Link to="/hello">
            <li>Hello</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Home
