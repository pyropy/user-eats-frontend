import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <SignUp></SignUp>
        </Route>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
