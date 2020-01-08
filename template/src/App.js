import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home'
import About from './containers/About'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const App = () => {
  return (
    <Router>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div>CRA Template initialised... happy coding!</div>
        <Button>
          Sign In
        </Button>
        <Button>
          Sign Up
        </Button>
      </Container>
      <Route>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
