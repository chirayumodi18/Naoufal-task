import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Containers/landing-page';
import Diversity from './Containers/diversity';
import Trust from './Containers/trust';
import Help from './Containers/help';
import GettingStarted from './Containers/help/getting-started';
import YourCalendar from './Containers/help/your-calendar';
import DecidingToHost from './Containers/help/getting-started/deciding-to-host';
import AirbnbFriendlyProgramme from './Containers/help/getting-started/deciding-to-host/airbnb-friendly-programme';
import WhoCanHostOnAirbnb from './Containers/help/getting-started/deciding-to-host/who-can-host-on-airbnb';
import ListYourSpace from './Containers/help/getting-started/list-your-space';
import EditMyReservationPreferences from './Containers/help/getting-started/list-your-space/edit-my-reservation-preferences';
import MakeMySpaceMoreAccessibleForGuests from './Containers/help/getting-started/list-your-space/make-my-space-more-accessible-for-guests';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/diversity' component={Diversity} />
        <Route exact path='/trust' component={Trust} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/help/0' component={GettingStarted} />
        <Route exact path='/help/1' component={YourCalendar} />
        <Route exact path='/help/0/01' component={DecidingToHost} />
        <Route exact path='/help/0/01/Whats-the-airbnb-friendly-buildings-programme' component={AirbnbFriendlyProgramme} />
        <Route exact path='/help/0/01/who-can-host-on-airbnb' component={WhoCanHostOnAirbnb} />
        <Route exact path='/help/0/02' component={ListYourSpace} />
        <Route exact path='/help/0/02/edit-my-reservation-preferences' component={EditMyReservationPreferences} />
        <Route exact path='/help/0/02/make-my-space-more-accessible-for-guests-with-disabilities' component={MakeMySpaceMoreAccessibleForGuests} />
        <Route exact path='/help/*' component={Help} />
      </Switch>
    </div>
  );
}

export default App;
