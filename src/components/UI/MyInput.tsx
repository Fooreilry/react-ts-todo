import React, { ChangeEvent, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<IInputProps> = ({ onChange, ...props }) => {
    return (
        <input
            {...props}
            onChange={onChange}
            className="w-full rounded-md border-2 border-sky-800 py-1 px-3 text-black"
        />
    );
};

export default MyInput;
