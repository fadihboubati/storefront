// "use strict";

// Types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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
let initialState = [
    { id: 1, name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { id: 2, name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { id: 3, name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { id: 4, name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { id: 5, name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { id: 6, name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { id: 7, name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    { id: 8, name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { id: 9, name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { id: 10, name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { id: 11, name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { id: 12, name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { id: 13, name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { id: 14, name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
]

// Reducer
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            return state.map(product => product.name === payload.productName ? { ...product, inStock: product.inStock - 1 } : product)

        case REMOVE_FROM_CART:
            return state.map(product => product.id === payload.id ? { ...product, inStock: product.inStock + 1 } : product)


        default:
            return state
    }
}
