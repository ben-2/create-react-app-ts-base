import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter";
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, routerMiddleware(history)),
  )
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;