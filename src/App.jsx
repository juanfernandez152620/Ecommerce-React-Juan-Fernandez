import { useState } from 'react'
import Navegador from './components/Navegador.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'


function App() {
  const [carrito, setCarrito] = useState(1);

  const addCarrito = () => {
    setCarrito(carrito + 1);
  }

  const subCarrito = () => {
    setCarrito(carrito - 1);
  }

  return (
    <>
      <Navegador carrito={carrito} />
      <h1>PreEntrega1Fernandez</h1>
      <hr />
      <ItemListContainer Saludo={"Este es mi saludo. Sentite libre de incrementar o disminuir el carrito"}  addCarrito={addCarrito} subCarrito={subCarrito} /> 
    </>
  )
}

export default App
