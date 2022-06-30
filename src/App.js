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
      cats: cats
    }
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
              return <CatShow cat={cat} />
            }} />
            <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />} />
            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </main>
      </Router>

    );
  }
}


export default App;
