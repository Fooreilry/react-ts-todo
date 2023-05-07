import React, { useState } from 'react';
import { ITodo } from '../../types/ITodo';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';

interface ITodoFormProps {
    addTodo: (todo: ITodo) => void;
}

const TodoForm: React.FC<ITodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const createTodo = () => {
        if (value) {
            const todo = {
                id: Date.now(),
                title: value,
                isComplited: false,
            };
            addTodo(todo);
            setValue('');
        }
    };
    const submitHendler = (event: React.FormEvent) => {
        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={submitHendler} className="mb-5 flex w-full items-center justify-start gap-4">
                <div className="w-full">
                    <MyInput
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                        value={value}
                        type={'text'}
                    />
                </div>

                <MyButton onClick={createTodo}>Создать</MyButton>
            </form>
        </div>
    );
};

export default TodoForm;
