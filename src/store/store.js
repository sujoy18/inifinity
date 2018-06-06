//@flow
import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers';

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(logger))
};
