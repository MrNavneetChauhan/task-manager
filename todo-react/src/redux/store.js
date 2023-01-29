import { legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "./todoReducer/reducer";
const reducer = combineReducers({
	todoReducer,
});
export const store = legacy_createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
