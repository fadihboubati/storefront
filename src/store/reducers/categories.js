// "use strict";

// Types
import { ACTIVE_CATEGORY, INIT_CATEGORIES } from "../actions/types";

// InitialState
let initialState = {
    categoryList: [
        // { _id: 1, name: 'electronics', displayName: 'Elecronics' },
        // { _id: 2, name: 'jewelery', displayName: 'Jewelery' },
        // { _id: 3, name: "men's clothing", displayName: "men's clothing" },
        // { _id: 4, name: "women's clothing", displayName: "women's clothing" },
        // { _id: 3, name: 'clothing', displayName: 'Clothing' },
    ],
    activeCategory: ''
};

// Reducer
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIVE_CATEGORY:
            return { ...state, activeCategory: payload.categoryName }

        case INIT_CATEGORIES:
            return { ...state, categoryList: payload.categoryList }

        default:
            return state
    }
}
