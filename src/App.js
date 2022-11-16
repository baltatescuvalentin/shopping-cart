import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SharedLayout from './components/SharedLayout';
import Error from './components/Error';
import SharedCatalog from './components/catalogproducts/SharedCatalog';
import ProductsCatalog from './components/catalogproducts/ProductsCatalog';
import CategoryProducts from './components/catalogproducts/CategoryProducts';
import SingleProduct from './components/catalogproducts/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />}/>
          {/* fac un router cu shared pentru fiecare in care transmit numele pentru sidebar
            in index pun toate produsele
            fac path specific pentru productId
           */}
          <Route path='catalog' element={<SharedCatalog />}>
            <Route index element={<ProductsCatalog />} />
            <Route path=':categoryId' element={<CategoryProducts />} />
            <Route path=':catehoryId/:productId' element={<SingleProduct />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
