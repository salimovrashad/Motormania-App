import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { motoReducer } from "../reducers/motoReducer";
import { blogReducer } from "../reducers/blogReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            mr: motoReducer,
            br: blogReducer
        }), 
        
        composeEnhancers(applyMiddleware(thunk)));
    return store;
}

export default configureStore;