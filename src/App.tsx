import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Containers/landing-page';
import Diversity from './Containers/diversity';
import Trust from './Containers/trust';
import Help from './Containers/help';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/diversity' component={Diversity} />
        <Route exact path='/trust' component={Trust} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/help/*' component={Help} />
      </Switch>
    </div>
  );
}

export default App;
