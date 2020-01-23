import React,{useState} from 'react';
import Home from './Sites/Home'
import About from './Sites/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Strona główna</Link></li>
              <li><Link to="/about">O nas</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
