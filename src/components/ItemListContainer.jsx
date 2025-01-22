import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../db/db'

const ItemListContainer = ({ Saludo }) => {

  const [productos, setProductos] = useState([])
  const { idCategory } = useParams()

  const collectionName = collection(db, 'productos')

  const getProducts = async() => {
    try {
      const dataDb = await getDocs(collectionName)
      const data = dataDb.docs.map((productos) => {
        return { id: productos.id, ...productos.data() }
      })
      setProductos(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getProductsByCategory = async() => {
    try {
      const q = query(collectionName, where("category", "==", idCategory))
      const dataDb = await getDocs(q)
      const data = dataDb.docs.map((productos) => {
        return { id: productos.id, ...productos.data() }
      })
      setProductos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory()
    } else {
      getProducts()
    }
  }, [idCategory])



  return (
    <div className='container'>
      <div className='d-flex align-content-center gap-3'>
        <h2 style={{whiteSpace: 'nowrap'}}>{Saludo}</h2>
        <p className='d-none d-md-block m-0 text-secondary' style={{fontSize: '10px'}}>(<strong>Anter de corregir!</strong> Este proyecto fue diseñado primero para mobile y luego fue adaptado para la vista en escritorio, preferiblemente si pudiera ver el proyecto en vista mobile atravez de las herramientas de desarrollo, Muchas Gracias!)</p>
      </div>
      <hr />
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} xs={6} md={4}>
            <ProductCard producto={producto} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ItemListContainer
