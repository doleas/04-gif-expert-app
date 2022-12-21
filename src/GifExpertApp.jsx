import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //para generar un listado
    const [categories, setCategories] = useState(['One Punch']);

    // console.log(categories);

    const handleAddCategory = (newCategory) => {
        // categories.push(newCategory);
        // console.log(newCategory);
        // categories.push('Henshing'); //por ahora en los posible no utilizar push hasta saber bien como funciona
        // const saludo = 'Hola mundo';
        // setCategories([saludo, ...categories]) //vamos a utilizar un spret
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* Esto va  a estar dividido en tres partes */}
            {/* titulo */}
            <h1> GifExpertApp </h1>
            {/*componente input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => handleAddCategory(event)}
            />
            {/* listado de gif */}
            {/* <button onClick={handleAddCategory}>Agregar</button> */}
            <ol>
                {/* con map transformamos el arreglo pero solo visualmente */}
                {
                    categories.map((category) => (
                        // return <li key={category}> {category} </li>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
            {/* gif item */}
        </>
    )
} 