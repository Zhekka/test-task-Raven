import {combineReducers, createStore} from "redux";
import mainReducer from "./mainReducer";
import {reducer as formReducer} from 'redux-form'
import {loadState, saveState} from './localStorage/localStorage'


const persistedStore = loadState()
let reducers = combineReducers({
    mainPage: mainReducer,
    form: formReducer
});

let store = createStore(reducers,persistedStore);

store.subscribe(()=>{
    saveState(store.getState())
})
window.store = store

export default store;
