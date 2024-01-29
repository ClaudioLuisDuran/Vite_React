
import { createContext, useState } from "react";
import { Cart } from './../components/Cart';
import { useCart } from '../hooks/useCart';

//1. crear contexto
export const CartContext = createContext()

// 2. creear provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id == product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        // producto no esta en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item.id != product.id))
    }

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}