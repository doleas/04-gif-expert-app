
import React from "react"
import Proptypes from 'prop-types'

export const GifItem = ( { title, url } ) => {

    // console.log( { title, url } );
    // alt es el texto alternativo cuando la imagen no se puede mostrar
  return (
    <div className="card">    
        <img src={ url } alt={ title } />
        <p> { title } </p>
    </div>
  )
}

GifItem.propTypes = {
  title: Proptypes.string.isRequired,
  url  : Proptypes.string.isRequired
}
