import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
    <>
      <div className='d-flex'>
        <p className='fw-bold mb-0'>{totalQuantity()}</p>
        <FaShoppingCart size={24} className="text-dark" />
      </div>
    </>
  )
}

export default CartWidget
