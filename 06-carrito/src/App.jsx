import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products'
import './App.css'
import './components/Products.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './config.js'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/cart'
import { CartProvider } from './context/cart'


function App() {
  const { filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
      
    </CartProvider>
  )
}

export default App
