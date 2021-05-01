import React, { useReducer, useContext } from 'react';
import { useSampleDispatch, useSampleState } from './SampleContext';

function ReducerSample () {
    const state = useSampleState();
    const dispatch = useSampleDispatch();

    return (
        <div style={{padding: 50}}>
            <p>
                <code>count : </code> {state.count}
            </p>
            <p>
                <code>text : </code> {state.text}
            </p>
            <p>
                <code>color : </code> {state.color}
            </p>
            <p>
                <code>isGood : </code> {state.isGood ? 'true' : 'false'}
            </p>
            <button onClick={() => dispatch({ type: 'SET_COUNT', count: 100})}>set count</button>
            <button onClick={() => dispatch({ type: 'SET_TEXT', text: 'world'})}>set text</button>
            <button onClick={() => dispatch({ type: 'SET_COLOR', color: 'blue'})}>set color</button>
            <button onClick={() => dispatch({ type: 'TOGGLE_GOOD'})}>set isGood</button>

        </div>
    );
}

export default ReducerSample;