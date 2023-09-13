import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { motoReducer } from "../reducers/motoReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            mr: motoReducer
        }), 
        
        composeEnhancers(applyMiddleware(thunk)));
    return store;
}

export default configureStore;