// standard middleware definition, with 3 nested functions:
// 1) Accepts `{dispatch, getState}`
// 2) Accepts `next`
// 3) Accepts `action`
const thunkMiddleware =
    ({ dispatch, getState }) =>
        next =>
            action => {
                console.log("thunkMiddleware");

                // If the "action" is actually a function instead...
                if (typeof action === 'function') {
                    // then call the function and pass `dispatch` and `getState` as arguments

                    console.log("the 'action' is a function - Async");
                    return action(dispatch, getState)
                }

                console.log("the 'action' is a normal action - object");
                // Otherwise, it's a normal action - send it onwards
                return next(action)
            }

export default thunkMiddleware;