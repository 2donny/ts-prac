import React, { ChangeEvent, useState } from 'react';

export interface TodoInsertProps {
    addTodo: (text: string) => void;
}

export function TodoInsert ({ addTodo }: TodoInsertProps) {
    const [todo, setTodo] = useState('');

    const SubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(todo.length === 0) return;
        addTodo(todo);
        setTodo('');
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    return (
        <form onSubmit={SubmitTodo}>
            <input 
                style={{padding: '14px', borderRadius: 12, outline: 'none'}}
                value={todo} 
                onChange={onChange} 
                placeholder="할 일을 입력 후 Enter 누르세요"
            />
        </form>
    );
}
