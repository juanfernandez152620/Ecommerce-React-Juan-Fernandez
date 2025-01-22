import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProduct = (newProduct) => {
        setCart((prevCart) => {
            // Busca si el producto ya está en el carrito
            const existingProduct = prevCart.find((product) => product.id === newProduct.id)
    
            if (existingProduct) {
                // Si el producto ya existe, suma las cantidades
                return prevCart.map((product) =>
                    product.id === newProduct.id
                        ? { ...product, cantidad: product.cantidad + newProduct.cantidad }
                        : product
                )
            } else {
                // Si el producto no existe, agrégalo al carrito
                return [...prevCart, newProduct]
            }
        })
    }
    

    // Eliminar un producto del carrito
    const delProduct = (productId) => {
      setCart(cart.filter((product) => product.id !== productId))
    }

    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productcart) => total + productcart.cantidad , 0) // 1:31
        return quantity
    }

    // Calcular el precio total de los productos en el carrito
    const totalPrice = () => {
      const total = cart.reduce(
        (sum, productcart) => sum + productcart.cantidad * productcart.price,
        0
      )
      return total
    }

    // función para limpiar el carrito
    const cleanCart = () => {
      setCart([]) // Vacía el estado del carrito
    }

    console.log(cart) //Comentar luego

    return (
        <CartContext.Provider value={ { cart, addProduct, delProduct, cleanCart, totalQuantity, totalPrice } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}