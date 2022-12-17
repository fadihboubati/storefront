// "use strict";


// Types
import { REMOVE_FROM_CART, ADD_TO_CART, LOAD_PRODUCTS } from "../actions/types";



// Action Creators
export function addToCart(productName) {
    return {
        type: ADD_TO_CART,
        payload: { productName }

    };
};

export function RemoveFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: { id }

    };
};

// InitialState
let initialState = []

// Reducer
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            return state.map(product => product.name === payload.productName ? { ...product, inStock: product.inStock - 1 } : product)

        case REMOVE_FROM_CART:
            return state.map(product => product.id === payload.id ? { ...product, inStock: product.inStock + 1 } : product)

        case LOAD_PRODUCTS:
            return payload.products

        default:
            return state
    }
}
