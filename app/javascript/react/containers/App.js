import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import PlaceShowPage from './place-show-page';

const App = props => {
  return(
    <div>
      <Router history={browserHistory} >
        <Route path='/' component={PlaceShowPage} />
      </Router>
    </div>
  )
}

export default App;
