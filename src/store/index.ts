import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import admin from "./reducers/AdminReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(admin, composeWithDevTools(applyMiddleware(thunk)))
export default store
