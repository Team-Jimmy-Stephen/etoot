import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from './Header';
import Login from './Login';

// npm install @material-ui/core @material-ui/icons
// npm install react-router-dom

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
