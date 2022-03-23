import React, {useState} from "react";

interface IAddCategories {
    setCategories: (value: (((prevState: string[]) => string[]) | string[])) => void
}

export const AddCategory = ({setCategories}: IAddCategories) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.trim()) {
            setCategories(categories => [inputValue, ...categories]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />

            <input
                type='submit'
                value='Save'
            />
        </form>
    );
}