import React from 'react'
import { NavLink } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li className="btn"><NavLink activeClassName="active" to='/repositories'>Repositories</NavLink></li>
        <li className="btn"><NavLink activeClassName="active" to='/organizations'>Organizations</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
