import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/SignUp" component={SignUp} exact />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
