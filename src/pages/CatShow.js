import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap'

class CatShow extends Component {
  render() {
    const { cat } = this.props
    console.log("SHOW", cat);

    return (
      <>
        {cat &&
          <Card style={{ width: '30rem' }}>
            <CardImg className='image' src={cat.image} />
            <CardBody>
              <CardTitle>Hi, my name is {cat.name}</CardTitle>
              <CardSubtitle>{cat.age}</CardSubtitle>
              <CardText>{cat.enjoys}</CardText>
            </CardBody>
          </Card>
        }

        <NavLink to={`/catedit/${cat.id}`}>
          <p>Edit this Saiyan</p>
        </NavLink>
        <NavLink to='/catnew'>
          <p>Add a Saiyan</p>
        </NavLink>
        <NavLink to='/catindex'>
          <p>Return to all Saiyans</p>
        </NavLink>
      </>
    )
  }
}
export default CatShow