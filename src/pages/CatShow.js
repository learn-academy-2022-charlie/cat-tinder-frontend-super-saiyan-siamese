import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    return (
      <>
      {cat && 
            <Card >
              <CardImg top width="100%" src={cat.image} />
              <CardBody>
                <CardTitle>Hi, my name is {cat.name}</CardTitle>
                <CardSubtitle>{cat.age}</CardSubtitle>
                <CardText>{cat.enjoys}</CardText>
              </CardBody>
            </Card>
        }
      </>
    )
  }
}
export default CatShow