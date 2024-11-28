import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({carrito}) => {
  return (
    <>
      <div className='d-flex'>
        <p className='fw-bold'>{carrito}</p>
        <FaShoppingCart size={24} className="text-dark" />
      </div>
    </>
  )
}

export default CartWidget
