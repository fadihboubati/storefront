"use strict";

// Types
const ACTIVE_CATEGORY = "ACTIVE_CATEGORY";

// Action Creators
export function selectCategory(categoryName) {
    return {
        type: ACTIVE_CATEGORY,
        payload: { categoryName }

    };
};

// InitialState
let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
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
    ],
    activeCategory: ''
};

// Reducer
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIVE_CATEGORY:
            return { ...state, activeCategory: payload.categoryName }

        default:
            return state
    }
}
