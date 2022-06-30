import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>

      <br></br>
      <NavLink to='/catindex'>
        <p>See all the ridiculous hair!</p>
      </NavLink>
      
      </>
    )
  }
}
export default Home