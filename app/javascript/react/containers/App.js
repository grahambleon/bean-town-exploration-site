import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import PlaceList from './PlaceList'
import PlaceTile from '../components/PlaceTile'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={PlaceList} >
        <IndexRoute component={PlaceList} />
        <Route path='/PlaceList' component={PlaceList} />

      </Route>
    </Router>
  );
}

export default App;
