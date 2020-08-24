import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import musicianTrackingReducer from './reducers/index';

const store = createStore;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
