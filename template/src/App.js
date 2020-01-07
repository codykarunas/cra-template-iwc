import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
} from 'react-router-dom'

import Home from './containers/Home'

const App = () => {
  return (
    <Router>
      <div>CRA Template initialised... happy coding!</div>
      <Link to="/">Home</Link>
      <Route>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
