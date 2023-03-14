import React, { useReducer } from "react";

const initialCart = { item: [] };

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                item: addToCart(state),
            };
        case "remove":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    );
}

export default UserReducer;
