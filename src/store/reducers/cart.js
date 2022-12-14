// "use strict";

// Types
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types"


// InitialState
let initialState = {
    cart: [],
    total: 0
}

// Reducer
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            const newState = {};

            // Cart is Empty
            if (state.cart.length === 0) {
                let newProduct = {
                    ...payload.productInfo,
                    inStock: payload.productInfo.inStock - 1,
                    qty: payload.qty
                }
                newState.cart = [newProduct]


                // Cart is not Empty
            } else {
                // check and update the cart
                let exist = false;
                for (const product of state.cart) {
                    if (product.title === payload.productInfo.title) {
                        exist = true;
                        break;
                    }
                }

                if (exist) {

                    newState.cart = state.cart.map(product => {

                        // the product is already in the cart
                        if (product.title === payload.productInfo.title) {

                            // update this product
                            let updatedProduct = {
                                ...product,
                                inStock: product.inStock - payload.qty,
                                qty: product.qty + payload.qty
                            }
                            return updatedProduct;

                        }
                        return product;
                    })

                    // else, Adding new product
                } else {
                    let newProduct = {
                        ...payload.productInfo,
                        inStock: payload.productInfo.inStock - 1,
                        qty: payload.qty
                    }
                    newState.cart = [
                        ...state.cart,
                        newProduct
                    ]
                }
            }

            newState.total = state.total + payload.qty
            return newState;

        // not working yet
        case REMOVE_FROM_CART:
            // product.id === payload.id ? { ...product, inStock: product.inStock + 1 } : product
            state.cart = state.cart.flatMap(product => {
                if (product.id === payload.id) {
                    if (product.qty == 1) {
                        return [];
                    } else {
                        return [{ ...product, inStock: product.inStock + 1, qty: product.qty - 1 }]
                    }
                }
            })
            state.total--
            return state


        default:
            return state
    }
}
