import thunk from "redux-thunk";
import counterReducer from "./reducers/userCount";
import useReducer from "./reducers/userReducer";
import userProfileReducer from "./reducers/UserProfileReducer"
import userManagementReducer from "./reducers/UserManagerReducer";
const { createStore, applyMiddleware, compose } = require("redux");
const { combineReducers } = require("redux");

// Viet vs typescript thi them dong nay vao khong co no se error
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  counter: counterReducer,
  userEdric: useReducer,
  userAdmin: userManagementReducer,
  userProfile: userProfileReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
