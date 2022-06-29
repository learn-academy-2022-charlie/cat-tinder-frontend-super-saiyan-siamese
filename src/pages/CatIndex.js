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
            {/* The cat images are stretching across the whole browser. We want to have tiny thumbnails for the cats on CatIndex */}
            {/* <CardImg top height="50px" width="50px" src={cat.image} /> */}
            <CardBody>
              <CardTitle>Hi, my name is {cat.name}</CardTitle>
              <CardSubtitle>{cat.age}</CardSubtitle>
              <NavLink to={`/catshow/${cat.id}`}>
                <Button>More info here</Button>
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