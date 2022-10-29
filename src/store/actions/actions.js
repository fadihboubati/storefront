"use strict";
import axios from "axios";

import { ACTIVE_CATEGORY, ADD_TO_CART, REMOVE_FROM_CART, GET_DATA, INIT_CATEGORIES, LOAD_PRODUCTS } from "./types";
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

export function addProductToCart(productInfo, qty = 1) {
    return {
        type: ADD_TO_CART,
        payload: { productInfo, qty }

    };
};

export function removeProductFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: { id }

    };
};


// Store Actions
// ...