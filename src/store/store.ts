import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './items/reducerItems';
import reducerCart from './cartReducer/reducerCart';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = combineReducers({ reducer, reducerCart });

let store = createStore(rootStore, composeEnhancers(applyMiddleware(thunk)));

export default store;
