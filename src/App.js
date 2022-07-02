import logo from './logo.svg';
import './App.css';
import './components/Header.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home';
import CatIndex from './pages/CatIndex';
import CatShow from './pages/CatShow';
import CatNew from './pages/CatNew';
import CatEdit from './pages/CatEdit';
import NotFound from './pages/NotFound';
import {
  // Austin renamed 'BrowserRouter' to 'Router'. Unsure if we need to do that too.
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import cats from './components/mockCats'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // cats: cats is pulling from mockCats.js
      // might need to link this.state.newCat from CatNew.js
      cats: []
    }
  }

  componentDidMount() {
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
      .then(response => response.json())
      // set the state with the data from the backend into the empty array
      .then(catsArray => this.setState({ cats: catsArray }))
      .catch(errors => console.log("Cat read errors:", errors))
  }

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

  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(payload => this.readCat())
      .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    const { cats } = this.state
    return (
      <Router>
        <main id="mainFont">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" render={(props) => <CatIndex cats={cats} />} />
            <Route path="/catshow/:id" render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find((catSingular) =>
                catSingular.id == id)
              return <CatShow cat={cat} deleteCat={this.deleteCat} />
            }} />
            <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />} />
            <Route path="/catedit/:id" render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatEdit updateCat={this.updateCat} cat={cat} />
            }} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </main>
      </Router>

    );
  }
}


export default App;
