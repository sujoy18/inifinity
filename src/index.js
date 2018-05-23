import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chess from './components/Chess'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Chess/>, document.getElementById('root'));
registerServiceWorker();
