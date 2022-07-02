import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap'

class CatShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }
  }
  handleDelete = () => {
    this.props.deleteCat(this.props.cat.id)
    this.setState({ deleted: true })
  }

  render() {
    const { cat } = this.props
    console.log("SHOW", cat);
    // if (this.state.deleted) {
    //   return (<Redirect to='/catindex' />)
    // }

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

        <Button onClick={this.handleDelete} name='delete'>
          Delete Cat Profile
        </Button>

        {this.state.deleted && <Redirect to='/catindex' />}
      </>
    )
  }
}

export default CatShow