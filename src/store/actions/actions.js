"use strict";
import axios from "axios";

import { ACTIVE_CATEGORY, ADD_TO_CART, REMOVE_FROM_CART, GET_DATA, INIT_CATEGORIES } from "./types"
const REACT_APP_API = process.env.REACT_APP_BASE_URL;

// Categroies Actions
export const getCategories = () => async dispatch => {
    console.log("---------------- get remote ------------------");
    console.log(REACT_APP_API);
    let REACT_APP_API2 = "https://fakestoreapi.com"
    const url = REACT_APP_API2 + "/products/categories"
    let results = await axios.get(url);
    console.log({ results });
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

// Categroies Actions
export function setProducts(products) {
    return {
        type: GET_DATA,
        payload: { data: products }
    }
}

export const getProducts = () => async (dispatch, state) => {
    const url = REACT_APP_API + "/products"
    let result = await axios.get(REACT_APP_API);
    dispatch(setProducts(result.data));
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
