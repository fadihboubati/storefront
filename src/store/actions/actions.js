// "use strict"; // "use strict" is not necessary in this module
import axios from "axios";

import { ACTIVE_CATEGORY, ADD_TO_CART, REMOVE_FROM_CART, INIT_CATEGORIES, LOAD_PRODUCTS } from "./types";
const REACT_APP_API = process.env.REACT_APP_BASE_URL; //"https://fakestoreapi.com"

// Categroies Actions
export const getCategories = () => async dispatch => {
    const url = REACT_APP_API + "/products/categories"
    let results = await axios.get(url);
    dispatch(setCategories(results.data));
};

export const setCategories = (categoryList) => {
    return {
        type: INIT_CATEGORIES,
        payload: { categoryList }
    };
}

export function selectCategory(categoryName) {
    return {
        type: ACTIVE_CATEGORY,
        payload: { categoryName }

    };
};

// Products Actions
export const getProducts = (activeCategory) => async (dispatch, state) => {
    const url = REACT_APP_API + "/products"
    let result = await axios.get(url);
    const featuredProducts = result.data.filter(product => product.category === activeCategory);
    dispatch(setProducts(featuredProducts));
}

export function setProducts(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: { products }
    }
}


// Store Actions
export function add(productInfo, qty = 1) {
    return {
        type: ADD_TO_CART,
        payload: { productInfo, qty }

    };
};

export const addProductToCart = (product, qty = 1) => async dispatch => {

    // // Update the in Stock for this product, decrement the amount
    // // ---------------------------------------------------------------
    // let updatedProduct = { inStock: product.inStock - qty };
    // let url = `${process.env.REACT_APP_API}/products/${product._id}`;
    // let results = await axios.put(url).send(updatedProduct);
    // let record = results.body;
    // dispatch(addProductToCart(record));

    dispatch(add(product, qty));
    // // so, we've updated the server, but haven't re-fetched the list
    // // is our display in sync with the server?
};


export function remove(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: { id }

    };
};

export const removeProductFromCart = (id) => async dispatch => {

    // // Update the in Stock for this product, encrement the amount
    // // ---------------------------------------------------------------
    // let updatedProduct = { inStock: product.inStock - 1 };
    // let url = `${process.env.REACT_APP_API}/products/${product._id}`;
    // let results = await axios.put(url).send(updatedProduct);
    // let record = results.body;
    // dispatch(addProductToCart(record));

    dispatch(remove(id));
    // // so, we've updated the server, but haven't re-fetched the list
    // // is our display in sync with the server?
};