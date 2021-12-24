import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const isServer = typeof window === 'undefined'
const isDev = process.env.NODE_ENV === 'development';

const composeEnhancers = 
  (isDev && !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk)) (
    createStore,
  )

  export const store = createStoreWithMiddleware(rootReducer);