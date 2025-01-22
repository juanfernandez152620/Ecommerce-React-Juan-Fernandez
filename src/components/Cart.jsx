import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import TotalPrice from './TotalPrice'
import CardCheckOut from './CardCheckOut'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, delProduct } = useContext(CartContext)

  return (
    <div className="container mt-5">
      <h2 className="text-center fs-1">Checkout</h2>

      {/* Lista de productos en el carrito */}
      <h3 className="mt-4">Productos En El Carrito:</h3>
      <Row className="mt-4">
        {cart.map((producto) => (
          <Col key={producto.id} xs={12} md={4} lg={3} className="mb-4">
            {/* Renderizamos CartCheckOut */}
            <CardCheckOut producto={producto} delProduct={delProduct} />
          </Col>
        ))}
      </Row>

      {/* Total del carrito */}
      <div className='d-flex mt-5 flex-column flex-md-row'>
        <div className="col">
          <h3>Resumen del Pedido:</h3>
          <TotalPrice cart={cart} />
        </div>
        <div className='col d-flex justify-content-start justify-content-md-center align-content-center mt-md-0 mt-4 gap-3'>
          {/* Botón Pagar solo si el carrito tiene productos */}
          {cart.length > 0 && (
            <div className='d-flex'>
              <Link className='text-decoration-none text-black' to="/checkOut">
                <Button 
                  variant="success"
                  className="rounded-end px-2 px-md-5"
                >
                  Pagar
                </Button>
              </Link>
            </div>
          )}
          {/* Botón Volver siempre visible */}
          <div className='d-flex'>
            <Link className='text-decoration-none text-black' to="/">
              <Button 
                variant="secondary"
                className="rounded-end px-2 px-md-5"
              >
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
