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
## Styling the Header
```css
p{ 
    color: rgb(242, 14, 174);
    font-family: courier;
    font-size: 2rem;
}

```

