import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './state/store/localStorage';

const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
