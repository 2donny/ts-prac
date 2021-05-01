import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../modules/todos';

type TodoProps = {
    id: number;
    text: string;
    done: boolean;
}

export default function Todo({ id, text, done }: TodoProps) {
    const dispatch = useDispatch();

    const removeHandler = () => {
        dispatch(removeTodo(id));
    }
    return (
        <li 
            style={{
                cursor: 'pointer',
                textDecoration: done ? 'line-through' : 'none'
            }}
            onClick={() => dispatch(toggleTodo(id))}
        >
            <p>{id}번째 투두 : {text} <button onClick={removeHandler}>제거</button></p>
        </li>
    )
}
