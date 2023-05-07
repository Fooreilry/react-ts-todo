import React from 'react';

type filterOption = {
    value: string;
    name: string;
};

interface ITodoFilterProps {
    filterOptions: filterOption[];
    changeFiltersOption: (option: string) => void;
}

const TodoFilter: React.FC<ITodoFilterProps> = ({ filterOptions, changeFiltersOption }) => {
    return (
        <div className="flex gap-4">
            {filterOptions.map((optin) => (
                <input
                    onClick={(e) => changeFiltersOption((e.target as HTMLInputElement).value)}
                    className="mb-6 cursor-pointer rounded-md border-2 border-sky-800 bg-sky-600 px-3 py-1 hover:bg-sky-800"
                    type="button"
                    value={optin.value}
                    key={optin.value}
                    name={optin.name}
                />
            ))}
        </div>
    );
};

export default TodoFilter;
