import Navegationbar from './components/Navegador.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/itemdetailcontainer.jsx'

function App() {

  return (
    <>
      <BrowserRouter >
        <Navegationbar carrito={1} />
        <Routes>
          <Route path="/" element={<ItemListContainer Saludo={"Este es mi saludo"} /> } />
          <Route path="/category/:idCategory" element={<ItemListContainer Saludo={"Este es mi saludo"} /> } />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
