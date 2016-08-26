import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ConfigPage from './containers/ConfigPage';
import QPage from './containers/QPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/config" component={ConfigPage} />
    <Route path="/q" component={QPage} />
  </Route>
);
