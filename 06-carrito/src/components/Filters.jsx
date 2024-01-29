import { useId } from 'react'
import './Filter.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
const { filters, setFilters } = useFilters()   

const minPriceFilterId = useId()
const categoryFilterId = useId()

const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
        ... prevState,
        minPrice: event.target.value
    }))
}

const handleChangeCategory = (event) => {
    setFilters(prevState =>({
    ... prevState,
    category: event.target.value
}))
}


    return (
        <section className={minPriceFilterId}>
            <div>
                <label htmlFor='price'>Precio mínimo</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div> 

            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='home-decoration'>Decoración</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                    <option value='fragrances'>Perfumes</option>
                    <option value='skincare'>Cuidado</option>
                    <option value='groceries'>Golosinas</option>
                    
                </select>
            </div>
        </section>
    )
}