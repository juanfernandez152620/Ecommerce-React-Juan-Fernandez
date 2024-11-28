import React from 'react'

const ItemListContainer = ({Saludo, addCarrito, subCarrito}) => {
  return (
    <>
      <h2>{Saludo}</h2>
      <div className='d-flex'>
        <button onClick={addCarrito}>+</button>
        <button onClick={subCarrito}>-</button>
      </div>
    </>
  )
}

export default ItemListContainer
