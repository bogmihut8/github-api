import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li className="btn"><Link to='/repositories'>Repositories</Link></li>
        <li className="btn"><Link to='/organizations'>Organizations</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
