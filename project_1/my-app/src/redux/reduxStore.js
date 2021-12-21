import { createStore, combineReducers, applyMiddleware } from "redux";
import author_reducer from "./athor_reducer";
import messagesPage_reducer from "./messagesPage_reducer";
import profilePage_reducer from "./profilePage_reducer";
import usersPage_reducer from "./usersPage_reducer";
import thunkMiddleware from 'redux-thunk'
import app_reducer from "./app_reducer";

let reducers = combineReducers({
    profilePage: profilePage_reducer,
    messagesPage: messagesPage_reducer,
    usersList: usersPage_reducer,
    auth: author_reducer,
    app: app_reducer,

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
