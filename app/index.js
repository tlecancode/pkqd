import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(<Provider store={store}>
  <Router history={history} routes={routes} />
</Provider>, document.getElementById('root'));

import {getConfig} from './actions/config'
store.dispatch(getConfig())
