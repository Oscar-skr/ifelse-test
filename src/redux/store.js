import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk"; 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Me conecta a la extensión del navegador REDUX DEVTOOLS.

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //Esta línea permite hacer peticiones a la API.

    ) 

export default store;