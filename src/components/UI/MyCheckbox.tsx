import React, { InputHTMLAttributes } from 'react';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyCheckbox: React.FC<ICheckboxProps> = ({ onChange, ...props }) => {
    return (
        <input
            type="checkbox"
            className="appearance-none rounded-xl border-2 border-sky-600 p-3 checked:bg-teal-400"
            {...props}
            onChange={onChange}
        />
    );
};

export default MyCheckbox;
