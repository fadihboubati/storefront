import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import productsRreducer from "./reducers/products.js";
import categoriesReducer from "./reducers/categories";
import cartReducer from './reducers/cart.js';

import thunk from './middlewares/thunk.js';
// import thunk from 'redux-thunk'




const reducers = combineReducers({ productsRreducer, categoriesReducer, cartReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};


// Dont froget to call the function here.
export default store();
