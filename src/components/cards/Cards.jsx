import React from 'react'

const Cards = ({titulo, anio, genero, poster}) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <img src={poster} alt="" />
      <h3>{anio}</h3>
      <h2>{genero}</h2>
    </div>
  )
}

export default Cards
