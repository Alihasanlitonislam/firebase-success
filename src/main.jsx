import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import Rejister from './components/Rejister/Rejister';
import Logout from './components/Logout/Logout';
import DaynamickLink from './components/DaynamickLink/DaynamickLink';
import PrivteRouter from './components/Router/PrivteRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <PrivteRouter><Checkout></Checkout></PrivteRouter>
      },
      {
        path: 'register',
        element: <Rejister></Rejister>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
      /* {
        path: 'logout',
        element: <Logout></Logout>
      } */
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DaynamickLink>
      <RouterProvider router={router} />
    </DaynamickLink>
  </React.StrictMode>,
)
