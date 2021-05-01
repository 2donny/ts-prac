import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../components/Todo';
import { TodoInsert } from '../components/TodoInsert';
import { RootState } from '../modules';
import { addTodo } from '../modules/todos';


export function TodoContainer () {
    const todos = useSelector((store: RootState) => store.todos);
    const dispatch = useDispatch();

    const addTodoHandler = (text: string) => {
        dispatch(addTodo(text));
    }
    
    return (
        <div style={{marginLeft: 100}}>
            <TodoInsert addTodo={addTodoHandler} />
            {todos.map(todo => (
                <ul key={todo.id}>
                    <Todo 
                        text={todo.text}
                        id={todo.id}
                        done={todo.done}
                    />
                </ul>
            ))}

        </div>
    );
}
