import React, { Component } from 'react'
import {Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="ReactState">React 3</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
