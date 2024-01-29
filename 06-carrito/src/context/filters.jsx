import { createContext, useState } from "react";

// crear contexto
export const FilterContext = createContext()

//proveer el Contexto > Crear el provider
export function FiltersProvider({ children }){
    const [filters, setFilters] = useState({
        category: 'all',
            minPrice: 250
    })

    return(
        <FilterContext.Provider value={{
            //aqui va la informacion a la que el Provider puede acceder
            filters,
            setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}