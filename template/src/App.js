import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './containers/Home'

const App = () => {
  return (
    <Router>
      <Route>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
