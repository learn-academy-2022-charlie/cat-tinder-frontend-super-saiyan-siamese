# TO DEMO CAT TINDER
- boot up terminal
> cat-tinder-backend repo
$ rails db:drop
$ rails db:setup
$ rails start

> cat-tinder-frontend repo
$ yarn start
$ y

# Setup

```
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
```

Add the remote from your GitHub classroom repository

```
$ git checkout -b main
$ git add .
$ git commit -m "Initial commit."
$ git push origin main
$ yarn start
```

## Creating folders and files

- Created directories:
    - src/assests
    - src/components
    - src/pages

- Created files:
    - src/components
        - Header.js
        - Footer.js

## Creating Pages Files
- Created files:
    - src/components
        - Home.js
        - CatIndex.js
        - CatShow.js
        - CatNew.js
        - CatEdit.js
        - NotFound.js

## Added Reactstrap
```
$ yarn add bootstrap
$ yarn add reactstrap
```
## Added React Router and Mock Cats
```
$ yarn add react-router-dom@5.3.0
```
>File: App.js
```javascript
import {
  // Austin renamed 'BrowserRouter' to 'Router'. Unsure if we need to do that too.
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
```
>File: mockCats.js
```javascript
let cats = [
    {
      id: 1,
      name: "Mittens",
      age: 5,
      enjoys: "sunshine and warm spots",
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Raisins",
      age: 4,
      enjoys: "being queen of the dogs",
      image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
    },
    {
      id: 3,
      name: "Toast",
      age: 1,
      enjoys: "getting all the attention",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
  export default cats
```
>File: App.js
```javascript
import  cats  from './components/mockCats'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      cats: cats
    }
  }
  render() { 
  return (
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" component={CatIndex} />
            <Route path="/catshow" component={CatShow} />
            <Route path="/catnew" component={CatNew} />
            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound}/>
          </Switch>
        <Footer/>
      </Router>
    
  );
  }
}
export default App;

```
## Default Styling
>File: src/App.css
```css
#mainFont {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: rgb(242, 14, 174);
}
```

## Header.css, Footer.css, NotFound.css
>File: src/components/Header.css
```
.header {
    font-size: 2rem;
    position: sticky;
    top: 0
}
```
>File: src/components/Footer.css
```
.footer {
    font-size: 100%;
}
```
>File: src/pages/NotFound.css
```
.notFound {
    font-size: 100%;
}
```

## Testing with Enzyme

`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

>File path: src/App.test.js
```
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import App from './App.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

// describe takes two arguments
describe("When App.js renders to the user", () => {
  let appRender
  beforeEach(() => {
    appRender = shallow(<App />)
  })
  it("it displays a header component", () => {
    let appHeaderRender = appRender.find("Header")
    expect(appHeaderRender.length).toEqual(1)

  })
  it("it displays a footer component", () => {
    let appFooterRender = appRender.find("Footer")
    expect(appFooterRender.length).toEqual(1)
  })
  it("it provides a path to the home page", () => {
    // .find() attribute syntax ('[]')
    let renderedHomePath = appRender.find('[path="/"]')
    // console.log(renderedHomePath.debug())
    // console.log(renderedHomePath.props().component)
    expect(renderedHomePath.length).toEqual(1)
  })

})
```

> File path: src/pages/Home.test.js
```
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe('When Home is rendered', () => {
    let renderedHome
  beforeEach(() => {
    renderedHome = shallow(<Home/>)
  })
    it('displays a message within a div tag', () => {

        const HomeTitleRender = renderedHome.find('div')
        expect(HomeTitleRender.length).toEqual(1)
    })
})
```

> File path: src/pages/NotFound.test.js
```
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import NotFound from './NotFound.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe('When Not Found is rendered', () => {
    let renderedNotFound
  beforeEach(() => {
    renderedNotFound = shallow(<NotFound/>)
  })
    it('displays a p message', () => {
        const notFound = shallow(<NotFound />)
        const notFoundTitleRender = notFound.find('p')
        expect(notFoundTitleRender.length).toEqual(1)
    })
})
```

> File path: src/components/Header.test.js
```
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Header from './Header.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe('When Header is rendered', () => {
    let renderedHeader
  beforeEach(() => {
    renderedHeader = shallow(<Header/>)
  })
    it('displays a message within a h1 tag', () => {

        const HeaderTitleRender = renderedHeader.find('h1')
        expect(HeaderTitleRender.length).toEqual(1)
        expect(HeaderTitleRender.text()).toEqual("Welcome to Super Saiyan Siamese Cat Tinder")
    })
})
```

> File path: src/components/Footer.test.js
```
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Footer from './Footer.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe('When Footer is rendered', () => {
    let renderedFooter
  beforeEach(() => {
    renderedFooter = shallow(<Footer/>)
  })
    it('displays a message within a p tag', () => {

        const FooterTitleRender = renderedFooter.find('p')
        expect(FooterTitleRender.length).toEqual(1)
    })
})
```

## Read Index and Show
There was some incompatibility issues with the way the syllabus has syntax on Read, so we uninstalled the current React router DOM and installed a specific version.
```
$ yarn remove react-router-dom
$ yarn add react-router-dom@5.3.3
```

## Read Index and Testing
> File path: src/pages/CatIndex.test.js
```
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatIndex from './CatIndex.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatIndex renders', () => {
    const props = {
        cats: [
            {
                id: 1,
                name: "Mittens",
                age: 5,
                enjoys: "sunshine and warm spots",
                image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

            }
        ]
    }
    let renderedCatIndex
    beforeEach(() => {
        renderedCatIndex = shallow(<CatIndex {...props} />)
    })
    it('displays a header', () => {

        const catIndexRender = renderedCatIndex.find('div')

        expect(catIndexRender.length).toEqual(1)
        expect(catIndexRender.text()).toEqual("Pick your training partner for the hyperbolic time chamber")
    })
    it("displays a card from ReactStrap per cat ", () => {
        const catIndexCard = renderedCatIndex.find("Card")
        expect(catIndexCard.length).toEqual(1)
    })
})
```

> File path: src/pages/CatIndex.js
NOTE: As we left, we were working on getting cat thumbnails for each cat in CatIndex. We were unable to find the proper inline CSS styling to get it to work. We may need to make a separate CSS file OR we can edit index.css and have a class associated with the CatIndex.

# CatShow and CatShow Testing

Started CatShow testing.
>File: src/pages/CatShow.test.js
```javascript
describe('When CatShow renders', () => {
    const cat= {
        id: 1,
        name: "Chicken",
        age: 5,
        enjoys: "sunshine and warm spots",
        image: "https://thiscatdoesnotexist.com/"
    }
    let renderedCatShow
    beforeEach(() => {
        renderedCatShow = shallow(<CatShow cat={cat} />)
    })
    it('displays profile of the cat in question', () => {

        const catShowRender = renderedCatShow.find('Card')

        expect(catShowRender.length).toEqual(1)

    })

})
```
The CatShow page
>File: src/pages/CatShow.js
```javascript
class CatShow extends Component {
  render() {
    const { cat } = this.props
    console.log("SHOW", cat);

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
```
The relevant route on App.js
```javascript

            <Route path="/catshow/:id" render={(props)=>{
              let id = props.match.params.id
              let cat = this.state.cats.find((catSingular)=> catSingular.id == id)
              return <CatShow cat={cat}/>
            }} />
```

# CatNew and CatNew Testing
> file path: src/pages/CatNew.test.js
```
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatNew from './CatNew.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatNew renders', () => {

    let renderedCatNew
    beforeEach(() => {
        renderedCatNew = shallow(<CatNew />)
    })
    it('displays a form to make a new cat', () => {
        const catShowRender = renderedCatNew.find('Form')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat name', () => {
        const catShowRender = renderedCatNew.find('[name="name"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat age', () => {
        const catShowRender = renderedCatNew.find('[name="age"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat enjoys', () => {
        const catShowRender = renderedCatNew.find('[name="enjoys"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat image', () => {
        const catShowRender = renderedCatNew.find('[name="image"]')
        expect(catShowRender.length).toEqual(1)
    })

})
```

> file path: src/pages/CatNew.js

NOTE TO SELF: 
(We figured this out, but forgot to update the README. We're so far past this issue that idk where to look to address it)
The submit button doesn't seem to do anything or redirect. We need to fix this.
    - We added a state for submitted, but we are unsure if it is doing anything.
    - We added a console.log to the handleChange so we can see if the newCat state is being updated.

>file: src/App.js
  ```javascript
  createCat = (cat) => {
    console.log("Cat Created", cat)
  }
  ```
  Corresponds with:
  ```javascript
   <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />} />
  ```

# Update
> file path: src/pages/CatEdit.js
```javascript
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

class CatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }
  handleChange = (e) => {
    // destructuring form out of state
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    // setting state to the updated form content
    this.setState({ newCat: newCat })
    // this console log should show if the newCat state was updated
    console.log("this.state.newCat updated: ", this.state.newCat)
  }

  updateCat = (cat, id) => {
    console.log("Cat: ", cat)
    console.log("Cat id: ", id)
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.newCat, this.props.cat.id)
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
        {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
      </>
    )
  }
}
export default CatEdit
```

> file path: src/pages/CatEdit.test.js
```javascript
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatEdit from './CatEdit.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe('When CatEdit renders', () => {

    let renderedCatEdit
    beforeEach(() => {
        renderedCatEdit = shallow(<CatEdit />)
    })
    it('displays a form to make a new cat', () => {
        const catShowRender = renderedCatEdit.find('Form')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat name', () => {
        const catShowRender = renderedCatEdit.find('[name="name"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat age', () => {
        const catShowRender = renderedCatEdit.find('[name="age"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat enjoys', () => {
        const catShowRender = renderedCatEdit.find('[name="enjoys"]')
        expect(catShowRender.length).toEqual(1)
    })
    it('displays an input for a cat image', () => {
        const catShowRender = renderedCatEdit.find('[name="image"]')
        expect(catShowRender.length).toEqual(1)
    })

})
```

# Fetch Read
> file path: src/App.js
```javascript
constructor(props){
  super(props)
  this.state = {
    // remove the mock cats and start with an empty array
    cats: []
  }
}

componentDidMount(){
  this.readCat()
}

readCat = () => {
  fetch("http://localhost:3000/cats")
  .then(response => response.json())
  // set the state with the data from the backend into the empty array
  .then(catsArray => this.setState({cats: catsArray}))
  .catch(errors => console.log("Cat read errors:", errors))
}
```

# Fetch Create
> file path: src/App.js
```
createCat = (newCat) => {
  fetch("http://localhost:3000/cats", {
    // converting an object to a string
    body: JSON.stringify(newCat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "POST"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("Cat create errors:", errors))
}
```

# Fetch Update
> file path: src/App.js
```javascript
updateCat = (cat, id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    // converting an object to a string
    body: JSON.stringify(cat),
    // specify the info being sent in JSON and the info returning should be JSON
    headers: {
      "Content-Type": "application/json"
    },
    // HTTP verb so the correct endpoint is invoked on the server
    method: "PATCH"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .catch(errors => console.log("Cat update errors:", errors))
}
```
# Fetch Delete
> file path: src/App.js
update the route for CatShow
```javascript
<Route path="/catshow/:id" render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find((catSingular) =>
                catSingular.id == id)
              return <CatShow cat={cat} deleteCat={this.deleteCat} />
            }} />
```

> file path: src/pages/CatShow.js
Only the added lines
```javascript
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

 handleDelete = () => {
    this.props.deleteCat(this.props.cat.id)
    this.setState({ deleted: true })
  }

  <Button onClick={this.handleDelete} name='delete'>
    Delete Cat Profile
  </Button>
```


## To-Do later
> CatShow
  - Set it so the name, age, and enjoys labels are before the flavor text.