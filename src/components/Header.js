import React, { Component } from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <h1 className="header">Welcome to Super Saiyan Siamese Cat Tinder</h1>
        <NavLink to='/'>
        HOME!
        </NavLink>
      </>
    )
  }
}
export default Header