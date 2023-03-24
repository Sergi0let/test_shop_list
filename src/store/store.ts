import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
  // Action,
} from 'redux';
import thunk from 'redux-thunk'; // {ThunkAction}
import reducer from './reducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// @ts-ignore
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
