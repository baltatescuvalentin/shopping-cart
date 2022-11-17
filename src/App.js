import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SharedLayout from './components/SharedLayout';
import Error from './components/Error';
import SharedCatalog from './components/catalogproducts/SharedCatalog';
import ProductsCatalog from './components/catalogproducts/ProductsCatalog';
import CategoryProducts from './components/catalogproducts/CategoryProducts';
import SingleProduct from './components/catalogproducts/SingleProduct';
import { useState } from 'react';
import products from './utils/products';
import ShoppingCartPage from './components/shoppingcart/ShoppingCartPage';

function App() {

  const [cart, setCart] = useState({
    cart: [],
  })

  function calculateTotal(cart) {
    let total = 0;
    cart.cart.forEach((c) => {
      const price = c.price * c.count;
      total += price;
    });

    return total;
  }

  function addProductToCart(prod) {
    const exists = cart.cart.find((product) => product.id === prod.id);

    if(exists === undefined) {
      setCart({
        ...cart,
        cart: [
          ...cart.cart,
          prod,
        ]
      })
    }
    else {
      addToAProduct(prod.id);
    }
    
  }

  function addToCart(id) {
    const product = products.find((product) => product.id === id);
    let exists = false;

    cart.cart.forEach((c) => {
      if(c.id === id) {
        exists = true;
        addToAProduct(id);
      }
    })

    if(exists === false) {
      setCart({
        ...cart,
        cart: [
          ...cart.cart,
          {
            id: product.id,
            name: product.name,
            image: product.image2,
            size: 'M',
            count: 1,
            categoryId: product.categoryId,
            price: product.price,
          }
        ]
      })
    }

    console.log('add to cart');
    console.log(cart);
  }

  function removeFromCart(id) {
    const cartFilter = cart.cart.filter((c) => c.id !== id);

    console.log('remove from cart');
    console.log(cartFilter);

    setCart({
      ...cart,
      cart: [
        ...cartFilter,
      ]
    })

    console.log('filtered cart');
    console.log(cart);
  }

  function changeSize(id, size) {
    const cartMap = cart.cart.map((c) => {
      if(c.id === id) {
        return {
          ...c,
          size: size,
        }
      }
      else {
        return c;
      }
    })

    console.log('change size');
    console.log(cartMap);

    setCart({
      ...cart,
      cart: [
        ...cartMap,
      ]
    })
  }

  function addToAProduct(id) {
    const cartMap = cart.cart.map((c) => {
      if(c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        }
      }
      else {
        return c;
      }
    })

    console.log('add to a product');
    console.log(cartMap);

    setCart({
      ...cart,
      cart: [
        ...cartMap,
      ]
    })
  }

  function decreaseToAProduct(id) {
    const cartMap = cart.cart.map((c) => {
      if(c.id === id) {
          return {
            ...c,
            count: c.count - 1,
          }
      }
      else {
        return c;
      }
    })

    const cartFilter = cartMap.filter((c) => c.count > 0);

    console.log('decrease to a product');
    console.log(cartMap);

    setCart({
      ...cart,
      cart: [
        ...cartFilter,
      ]
    })
  }

  const functions = {
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    addToAProduct: addToAProduct,
    decreaseToAProduct: decreaseToAProduct,
    calculateTotal: calculateTotal,
    changeSize: changeSize,
    addProductToCart: addProductToCart,
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout cart={cart}/>} >
          <Route index element={<Home />}/>
          {/* fac un router cu shared pentru fiecare in care transmit numele pentru sidebar
            in index pun toate produsele
            fac path specific pentru productId
           */}
          <Route path='catalog' element={<SharedCatalog />}>
            <Route index element={<ProductsCatalog />} />
            <Route path=':categoryId' element={<CategoryProducts cart={cart} functions={functions}/>} />
            <Route path=':catehoryId/:productId' element={<SingleProduct cart={cart} functions={functions}/>} />
          </Route>
          <Route path='cart' element={<ShoppingCartPage cart={cart} functions={functions} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
