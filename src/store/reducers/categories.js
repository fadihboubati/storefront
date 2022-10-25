// "use strict";

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
        { _id: 1, name: 'electronics', displayName: 'Elecronics' },
        { _id: 2, name: 'food', displayName: 'Food' },
        { _id: 3, name: 'clothing', displayName: 'Clothing' },
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
