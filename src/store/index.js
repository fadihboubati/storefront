import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import productsRreducer from "./reducers/products.js";
import categoriesReducer from "./reducers/categories";
import cartReducer from './reducers/cart.js';


const reducers = combineReducers({ productsRreducer, categoriesReducer, cartReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
};


// Dont froget to call the function here.
export default store();
