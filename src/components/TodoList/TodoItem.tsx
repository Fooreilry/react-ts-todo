import React from 'react';
import { ITodo } from '../../types/ITodo';
import MyButton from '../UI/MyButton';
import MyCheckbox from '../UI/MyCheckbox';

interface ITodoPros {
    todo: ITodo;
    changeСompleteness: (todo: ITodo, complitStatus: boolean) => void;
    removeTodo: (todo: ITodo) => void;
}

const TodoItem: React.FC<ITodoPros> = ({ todo, changeСompleteness, removeTodo }) => {
    const changeStatus = (complitStatus: boolean) => {
        changeСompleteness(todo, complitStatus);
    };

    return (
        <div className="mb-3 flex items-center rounded-lg border-2 border-sky-700 bg-slate-800 p-5">
            <MyCheckbox onChange={(e) => changeStatus(e.target.checked)} checked={todo.isComplited} />
            <h2 className="w-full break-all px-5 font-semibold">{todo.title}</h2>
            <MyButton onClick={() => removeTodo(todo)}>Удалить</MyButton>
        </div>
    );
};

export default TodoItem;
