import './Products.css'
import { useCart } from '../hooks/useCart';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';


export function Products({ products }) {
    const { addToCart, RemoveFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id == product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return(
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button
                            style={{ backgroundColor: isProductInCart ? 'red' : '#09f'}}
                            onClick={() => {
                                isProductInCart
                                ? RemoveFromCart(product)
                                : addToCart
                            }}
                            >
                                {
                                    isProductInCart
                                    ? <RemoveFromCartIcon/>
                                    : <AddToCartIcon />
                                }
                                
                            </button>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </main>
    )
}