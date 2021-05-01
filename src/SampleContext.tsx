import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type Color = 'red' | 'orange' | 'blue';

type State = {
    count: number,
    text: string,
    color: Color,
    isGood: boolean
}

type Action = 
    | { type: 'SET_COUNT', count: number } 
    | { type: 'SET_TEXT', text: string } 
    | { type: 'SET_COLOR', color: Color } 
    | { type: 'TOGGLE_GOOD'} 
    

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
    }
}

type DispatchType = Dispatch<Action>
export const StateContext = createContext<State | null>(null);
export const DispatchContext = createContext<DispatchType | null>(null);

type Props = {
    children: React.ReactNode
}
function SampleProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, {
        count: 5,
        text: 'hello',
        color: 'red',
        isGood: true,
    });

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>    
        </StateContext.Provider>
    )
}

export function useSampleState() {
    const context = useContext(StateContext);
    if(!context) throw new Error('Cannot find SampleProvider');
    return context;
}

export function useSampleDispatch() {
    const context = useContext(DispatchContext);
    if(!context) throw new Error('Cannot find SampleProvider');
    return context;
}

export default SampleProvider;