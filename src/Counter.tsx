import React, { useReducer, useState } from 'react';

type Action = { type: 'INCREASE' } | {type: 'DECREASE'}

function reducer(state: number, action: Action): number {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch({type: 'DECREASE'})}>Decrease</button>
            <button onClick={() => dispatch({ type: 'INCREASE'})}>Increase</button>
        </>
    )
}

export default Counter;