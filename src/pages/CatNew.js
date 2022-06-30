import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

class CatNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      }
    }
  }
  handleChange = (e) => {
    // destructuring form out of state
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    // setting state to the updated form content
    this.setState({ newCat: newCat })
  }

  handleSubmit = () => {
    this.props.createCat(this.state.newCat)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newCat.name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Age</Label>
            <Input
              type="text"
              name="age"
              onChange={this.handleChange}
              value={this.state.newCat.age}
            />
          </FormGroup>
          <FormGroup>
            <Label>Hobbies</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newCat.enjoys}
            />
          </FormGroup>
          <FormGroup>
            <Label>Picture</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newCat.image}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} name='submit'>
            Launch that cat into destiny
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/catindex" />}
      </>
    )
  }
}
export default CatNew