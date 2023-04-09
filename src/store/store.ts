import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import reducerItems from './itemsReducer/reducerItems';
import reducerCart from './cartReducer/reducerCart';

// ts@ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = combineReducers({ reducerItems, reducerCart });

let store = createStore(rootStore, composeEnhancers(applyMiddleware(thunk)));

export default store;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
