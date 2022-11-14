import React, { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        // console.log(event);
        //para evitar el refresh del navegador web
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length <= 1) return;

        setCategories(categories => [inputValue, ...categories])
    } 

    return (
        // <div>AddCategory</div>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}