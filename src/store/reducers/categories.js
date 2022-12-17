// "use strict";

// Types
import { ACTIVE_CATEGORY, INIT_CATEGORIES } from "../actions/types";

// InitialState
let initialState = {
    categoryList: [],
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
