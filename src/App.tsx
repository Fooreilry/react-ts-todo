import React, { useEffect, useState, useMemo } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './types/ITodo';
import { getItemsFromLocalStorage, updateLocalStorage } from './utils/localStorage';
import './app.scss';
import TodoFilter from './components/TodoFilter/TodoFilter';

function App() {
    const filterOptions = [
        { value: 'all', name: 'Все' },
        { value: 'complit', name: 'Выполненные' },
        { value: 'not complit', name: 'Не выполненные' },
    ];
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [filterOption, setFilterOption] = useState<string>('all');

    useEffect(() => {
        const data = getItemsFromLocalStorage();
        if (!data) {
            return setTodoList([]);
        }
        const todos = JSON.parse(data);
        return setTodoList(todos);
    }, []);

    const changeСompleteness = (todo: ITodo, complitStatus: boolean) => {
        const todos = todoList.map((e) => {
            if (e.id === todo.id) {
                return {
                    ...e,
                    isComplited: complitStatus,
                };
            }
            return e;
        });
        setTodoList(todos);
        updateLocalStorage(todos);
        console.log(todo, complitStatus);
        console.log(todoList);
    };
    const filteredTodoList = useMemo(() => {
        if (filterOption === 'complit') {
            return [...todoList].filter((todo) => todo.isComplited);
        }
        if (filterOption === 'not complit') {
            return [...todoList].filter((todo) => !todo.isComplited);
        }
        return [...todoList];
    }, [filterOption, todoList]);

    const changeFiltersOption = (option: string) => {
        setFilterOption(option);
    };

    const removeTodo = (todo: ITodo) => {
        const todos = todoList.filter((item) => item.id !== todo.id);
        setTodoList(todos);
        updateLocalStorage(todos);
    };

    const addTodo = (todo: ITodo) => {
        console.log(todo);
        const todos = [...todoList, todo];
        setTodoList(todos);
        updateLocalStorage(todos);
    };

    return (
        <div>
            <header className="mb-10 bg-blue-900 py-5 px-7">
                <h1 className="text-4xl font-semibold">React Todos</h1>
            </header>
            <div className="container mx-auto px-4">
                <TodoForm addTodo={addTodo} />
                <TodoFilter filterOptions={filterOptions} changeFiltersOption={changeFiltersOption} />
                <TodoList changeСompleteness={changeСompleteness} removeTodo={removeTodo} todos={filteredTodoList} />
            </div>
        </div>
    );
}

export default App;
