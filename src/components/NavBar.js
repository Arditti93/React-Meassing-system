import React from 'react'
import chatLogo from '../images/chatLogo.png'
import './NavBar.css'

const NavBar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <img className = "toolbarLogo" src = {chatLogo} alt="searchGlass" />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Threads</a>
          </li>
          <li>
            <a href="/">All DMs</a>
          </li>
          <li>
            <a href="/">Mentions</a>
          </li>
          <li>
            <a href="/">Reactions</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default NavBar