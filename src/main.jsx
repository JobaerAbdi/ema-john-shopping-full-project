import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Roots from './components/Roots/Roots';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loader/cartProductsLoader';
import Checkout from './components/Shop/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Roots></Roots>,
    children : [
      {
        path : '/',
        element : <Shop></Shop>,
      },
      {
        path : '/orders',
        element : <Orders></Orders>,
        loader : cartProductsLoader,
      },
      {
        path : '/inventory',
        element : <Inventory></Inventory>,
      },
      {
        path : '/checkout',
        element : <Checkout></Checkout>
      },
      {
        path : '/login',
        element : <Login></Login>,
      }
    ] 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
