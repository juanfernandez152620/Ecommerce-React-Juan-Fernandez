import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'

const CardCheckOut = ({ producto, delProduct }) => {
  return (
    <Card>
      {/* Imagen del producto */}
      <Card.Img
        variant="top"
        src={'img/' + producto.image}
        alt={producto.title}
      />
      <Card.Body>
        {/* Título del producto */}
        <Card.Title>{producto.title}</Card.Title>
        
        {/* Detalles del producto */}
        <Card.Text>
          Precio unitario: ${producto.price}
          <br />
          Cantidad: {producto.cantidad}
          <br />
          Subtotal: ${producto.price * producto.cantidad}
        </Card.Text>
        
        {/* Botón de eliminar */}
        <Button
          variant="danger"
          className="w-100"
          onClick={() => delProduct(producto.id)}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  )
}

// Validación de props
CardCheckOut.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cantidad: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  delProduct: PropTypes.func.isRequired,
}

export default CardCheckOut
