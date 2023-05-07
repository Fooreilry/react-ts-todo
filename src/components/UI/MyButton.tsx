import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MyButton: React.FC<IButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <button {...props} className=" rounded-md border border-sky-700 py-2 px-5 hover:bg-sky-700 " onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;
