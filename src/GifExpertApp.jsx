import React, { useState } from 'react';

export const GifExpertApp = () => {

    //para generar un listado
    const [categories, setCategories] = useState([ 'One Punch' ]);

    console.log(categories);

    return (
        <>
        {/* Esto va  a estar dividido en tres partes */}
            {/* titulo */}
            <h1> GifExpertApp </h1>
            {/* input */}

            {/* listado de gif */}
            <ol>
                <li>ABC</li>
                <li>123</li>
                <li>.</li>
            </ol>
                {/* gif item */}
        </>
    )
} 