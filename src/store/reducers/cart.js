// "use strict";

// Types
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Action Creators
export function addToCart(productInfo, qty = 1) {
    return {
        type: ADD_TO_CART,
        payload: { productInfo, qty }

    };
};

export function RemoveFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: { id }

    };
};

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
            // console.log({ payload });
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
                    if (product.name === payload.productInfo.name) {
                        exist = true;
                        break;
                    }
                }

                if (exist) {

                    newState.cart = state.cart.map(product => {

                        // the product is already in the cart
                        if (product.name === payload.productInfo.name) {

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
                console.log(product);
                if (product.id === payload.id) {
                    if (product.qty == 1) {
                        return [];
                    } else {
                        return [{ ...product, inStock: product.inStock + 1, qty: product.qty - 1 }]
                    }
                }
            })
            console.log(state.cart);
            state.total--
            return state


        default:
            return state
    }
}
