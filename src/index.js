import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './store/store'
import './index.css';
import Chess from './components/Chess'
import registerServiceWorker from './registerServiceWorker';
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
  <Chess/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
