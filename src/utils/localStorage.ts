import { ITodo } from '../types/ITodo';

export const updateLocalStorage = (state: ITodo[]) => {
    try {
        localStorage.setItem('todos', JSON.stringify(state));
    } catch (error) {
        console.log(error);
    }
};

export const getItemsFromLocalStorage = () => {
    return localStorage.getItem('todos' || []);
};
