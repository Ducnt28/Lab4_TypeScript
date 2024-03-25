import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShopPage from './Pages/ShopPage'
import HomePage from './Pages/HomePage'
import ProductDetailPage from './Pages/ProductDetailPage'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/shop/:id' element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
