import React from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs( category );

    // console.log({ images, isLoading });

    return (
        <>

            <h3>{category}</h3>

            {/* <h5>{ counter }</h5>

            <button onClick={() => setCounter(counter+1)}>+1</button> */}
            <div className="card-grid">
                {/* tenemos que crear esto li de manera dinamica */}
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            // title={ image.title } 
                            // url={ image.url }
                            { ...image }
                        />
                    ))
                }
            </div>

        </>
    )

}