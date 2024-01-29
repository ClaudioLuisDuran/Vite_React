import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer (){
    const {filters} = useFilters()
    const { cart } = useCart()
return(
<footer className='footer'>
{/* {
    JSON.stringify(filters)
} */}
{
    JSON.stringify(cart, null, 2)
}

{/* <h4>Prueba de React</h4>
<span>Yo con la ayuda de midudev</span>
<span>Filtros: ${filters}</span>
<h5>Shopping Cart con useContext & useReducer</h5> */}
</footer>

)

}