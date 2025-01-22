import React from 'react'
import PropTypes from 'prop-types'

const TotalPrice = ({ cart }) => {
  // Calcula el total sumando el subtotal de cada producto (precio * cantidad)
  const total = cart.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0)

  return (
    <div className="col col-md-5">
      {cart.map((producto, index) => (
        <div key={index} className="d-flex justify-content-between">
          <div>
            <strong>{producto.title}</strong> (x{producto.cantidad})
          </div>
          <div>${producto.price * producto.cantidad}</div>
        </div>
      ))}
      <hr />
      <div className="d-flex justify-content-between">
        <h3>Total:</h3>
        <h3>${total}</h3>
      </div>
    </div>
  )
}

TotalPrice.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default TotalPrice
