import React from 'react';
import { ITodo } from '../../types/ITodo';
import TodoItem from './TodoItem';

interface ITodosProps {
    todos: ITodo[];
    changeСompleteness: (todo: ITodo, complitStatus: boolean) => void;
    removeTodo: (todo: ITodo) => void;
}

const TodoList: React.FC<ITodosProps> = ({ todos, changeСompleteness, removeTodo }) => {
    return (
        <div className="px-10">
            {todos.length !== 0 ? (
                todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        changeСompleteness={changeСompleteness}
                        removeTodo={removeTodo}
                        key={todo.id}
                    />
                ))
            ) : (
                <p className="text-center text-4xl">Список пуст</p>
            )}
        </div>
    );
};

export default TodoList;
