import React from 'react'

const CheckPrice = ({text, price}) => {
  return (
    <div className='d-flex justify-content-between'>
      <p className='text-secondary p-0 m-0'>{text}</p>
      <p className='text-secondary p-0 m-0'>${price}</p>
    </div>
  )
}

export default CheckPrice