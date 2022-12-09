import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    // const [counter, setCounter] = useState(10);

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }

    //dispara efectos secundarios
    useEffect(() => {
        getImages();
    }, [])
    

    // getGifs(category);

    return (
        <>

            <h3>{category}</h3>

            {/* <h5>{ counter }</h5>

            <button onClick={() => setCounter(counter+1)}>+1</button> */}
            <ol>
                {/* tenemos que crear esto li de manera dinamica */}
                {
                    images.map( ({ id, title }) => (
                        <li key={ id}> { title }</li>
                    ))
                }
            </ol>

        </>
    )

}