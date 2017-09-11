import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';

import configureStore from './store';

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
