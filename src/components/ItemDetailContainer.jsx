import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../src/data/data.js';
import { Card, Image, Spinner } from 'react-bootstrap';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null); // Cambiado de {} a null para evitar mostrar un objeto vacío antes de la carga.

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (id) {
          const product = data.find((prod) => prod.id === id); // Usar find y convertir id a número
          setProducto(product);
        } else {
          setProducto(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Terminó la promesa");
      });
  }, [id]);

  console.log("ID:", id);
  console.log("Producto:", producto);

  // Manejo de carga (opcional)
  if (!producto) {
    return <Spinner className=' position-absolute top-50 start-50' animation="border" />;
  }

  return (
    <div className='container col col-md-6'>
      <h2>Detalle del Producto</h2>
      <Card>
        <Card.Body>
          <Card.Title>{producto?.title}</Card.Title>
          <Image src={producto?.image} alt={producto?.name} fluid />
          <Card.Text>{producto?.description}</Card.Text>
          <Card.Text><strong>${producto?.price}</strong></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
