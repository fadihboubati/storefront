import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"

import productsRreducer from "./reducers/products.js"

const reducers = combineReducers({ productsRreducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
};


// Dont froget to call the function here.
export default store();
