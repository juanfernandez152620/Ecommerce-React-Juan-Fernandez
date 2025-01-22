import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../db/db'
import { Card, Image, Spinner } from 'react-bootstrap'
import ItemCount from '../components/ItemCount.jsx'

const ItemDetailContainer = () => {
  const { addProduct } = useContext(CartContext) // 1:23

  const addProductInCart = (count) => {
    const productCart = {... producto, cantidad: count}

    addProduct(productCart)
  }

  const { id } = useParams() 
  const [producto, setProducto] = useState(null) 

  const [loading, setLoading] = useState(true) // Estado para manejar la carga

  const getProduct = async () => {
    try {
      const docRef = doc(db, "productos", id)
      const dataDb = await getDoc(docRef)
  
      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() }
        setProducto(data)
      } else {
        console.error(`El producto con ID ${id} no existe en la base de datos.`)
        setProducto(null)
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error)
      setProducto(null)
    }
    setLoading(false) // Cambiar el estado de carga a false cuando termina de obtener la info
  }
  
  

  useEffect(() => {
    getProduct()
  }, [id])

  //console.log("ID:", id)
  //console.log("Producto:", producto)

  return (
    <div>
      {
        loading ? ( // Si está cargando, mostrar el spinner
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" />
          </div>
        ) : producto === null ? ( // Si no hay producto, mostrar mensaje de no encontrado
          <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="text-center shadow-lg" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>No se encuentra el producto</Card.Title>
                <Card.Text>
                  Ya no trabajamos con este producto o puede que no se encuentre disponible intente nuevamente luego o contactenos en nuestros canales de comunicacion. Disculpas por la molestia, Gracias!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : ( // Si ya hay un producto, mostrar los detalles
          <div className="container col col-md-6">
            <h2>Detalle del Producto</h2>
            <Card>
              <Card.Body className="d-block d-md-flex justify-content-between">
                <div>
                  <Image src={'img/' + producto?.image} alt={producto?.name} fluid className="w-100" />
                </div>
                <div className="p-3">
                  <Card.Title className="text-md-center fs-3">{producto?.title}</Card.Title>
                  <Card.Text>{producto?.description}</Card.Text>
                  <Card.Text><strong>${producto?.price}</strong></Card.Text>
                  <ItemCount addProduct={addProductInCart} />
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      }
    </div>
  )
  
}

export default ItemDetailContainer
