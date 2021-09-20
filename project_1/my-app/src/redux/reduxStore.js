import { createStore, combineReducers } from "redux";
import messagesPage_reducer from "./messagesPage_reducer";
import profilePage_reducer from "./profilePage_reducer";
import usersPage_reducer from "./usersPage_reducer";

let reducers = combineReducers({
    profilePage: profilePage_reducer,
    messagesPage: messagesPage_reducer,
    usersList: usersPage_reducer
});
let store = createStore(reducers);

export default store;
