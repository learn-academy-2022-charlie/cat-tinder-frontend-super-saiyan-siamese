import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

class CatIndex extends Component {
  render() {
    const { cats } = this.props
    console.log("INDEX", cats)
    return (<>

      <div>Pick your training partner for the hyperbolic time chamber</div>

      {cats && cats.map((cat, index) => {
        return (
          <Card key={index}>
            <CardBody>
              <CardTitle>Hi, my name is {cat.name}</CardTitle>
              <CardSubtitle>{cat.age}</CardSubtitle>
              <NavLink to={`/catshow/${cat.id}`}>
                <Button >Find Out More</Button>
              </NavLink>
            </CardBody>
          </Card>
        )
      })
      }
    </>
    )
  }
}
export default CatIndex