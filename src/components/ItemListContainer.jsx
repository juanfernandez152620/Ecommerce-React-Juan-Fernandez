import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { getProducts } from '../../src/data/data.js';

const ItemListContainer = ({ Saludo }) => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (idCategory) {
          const filterProducts = data.filter((prod) => prod.category === idCategory);
          setProductos(filterProducts);
        } else {
          setProductos(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Terminó la promesa");
      });
  }, [idCategory]);

  return (
    <div className='container'>
      <h2>{Saludo}</h2>
      <hr />
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} xs={6} md={4}>
            <ProductCard producto={producto} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemListContainer;
