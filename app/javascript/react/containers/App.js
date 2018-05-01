import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import PlaceList from './PlaceList';
import PlaceTile from '../components/PlaceTile';
import PlaceShowPage from './PlaceShowPage';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={PlaceList} />
      <Route path='/places' component={PlaceList} />
      <Route path='/places/:id' component={PlaceShowPage} />
    </Router>
  );
}
export default App;
