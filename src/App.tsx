import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Containers/landing-page';
import Diversity from './Containers/diversity';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/diversity' component={Diversity} />
      </Switch>
    </div>
  );
}

export default App;
