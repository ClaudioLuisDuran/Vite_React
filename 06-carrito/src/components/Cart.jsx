import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css'

export function Cart () {
    const cartCheckboxIde = useId()

    return(
        <>
        <label className='cart-button' htmlFor={cartCheckboxIde}>   
        <CartIcon />
        </label> 
        <input id={cartCheckboxIde} type='checkbox' hidden />

        <aside className='cart'>
            <ul>
                <li>
                    <img
                    src='https://i.dummyjson.com/data/products/2/thumbnail.jpg'
                    alt='Iphone'/>
                    <div>
                        <strong>iPhone</strong> - $1499
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon />
            </button>
        </aside>
        </>
    )
}