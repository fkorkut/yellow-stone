import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {About,Home } from './pages';

function App() {
  return (
    <Router>
     
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      
     
      </Switch>
     
    </Router>
  );
}

export default App;
