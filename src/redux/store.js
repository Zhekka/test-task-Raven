import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    mainPage: mainReducer,
    form: formReducer
});

let store = createStore(reducers);
window.store = store

export default store;
