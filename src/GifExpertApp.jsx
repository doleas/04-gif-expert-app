import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    //para generar un listado
    const [categories, setCategories] = useState(['One Punch', ' Dragon Ball']);

    // console.log(categories);

    const handleAddCategory = () => {
        // console.log('Henshing');
        // categories.push('Henshing'); //por ahora en los posible no utilizar push hasta saber bien como funciona
        const saludo = 'Hola mundo';
        setCategories([ saludo, ...categories ]) //vamos a utilizar un spret
    }

    return (
        <>
            {/* Esto va  a estar dividido en tres partes */}
            {/* titulo */}
            <h1> GifExpertApp </h1>
            {/* input */}
            <AddCategory setCategories={setCategories}/>
            {/* listado de gif */}
            {/* <button onClick={handleAddCategory}>Agregar</button> */}
            <ol>
                {/* con map transformamos el arreglo pero solo visualmente */}
                {categories.map(category => {
                    return <li key={category}> { category } </li>
                })
                }
                {/* <li>ABC</li>
                <li>123</li>
                <li>.</li> */}
            </ol>
            {/* gif item */}
        </>
    )
} 