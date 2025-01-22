import Navegationbar from './components/Navegador.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Checkout from './components/CheckOut.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart.jsx'

function App() {

  return (
    <>
      <BrowserRouter >
        <CartProvider> {/* El context del carrito */}
          <Navegationbar />
          <Routes>
            <Route path="/" element={<ItemListContainer Saludo={"Bienvenido a MobileHub"} /> } />
            <Route path="/category/:idCategory" element={<ItemListContainer Saludo={"Bienvenido a MobileHub"} /> } />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
