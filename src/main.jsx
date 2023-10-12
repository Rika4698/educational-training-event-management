import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import Events from './components/EventServices/EventServices';
import EventSet from './components/EventSet/EventSet';
import AddCartSet from './components/AddToCart/AddCartSet';
import AuthProvider from './Hook/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blogs from './components/PurchaseList/Blogs';
import Contact from './components/Contact/Contact';





const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorMessage></ErrorMessage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/Data.json'),
        
      },
      {
        path:'/services',
      element:<PrivateRoute><Events></Events></PrivateRoute>,
      loader: () => fetch('/Data.json'),
      },
      {
        path:'/contact',
        element:<Contact></Contact>,


      },
      
      {
        path:'/service/:id',
        element:<PrivateRoute><EventSet></EventSet></PrivateRoute>,
        loader: () => fetch('/Data.json'),
      },
      {
        path:'/cart',
        element:<AddCartSet></AddCartSet>
      },
      {
         path:'/purchase',
        element:<PrivateRoute><Blogs></Blogs></PrivateRoute>,
      },
      // {
      //         path:'/buy',
      //         element:<Purchase></Purchase>,
      // },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    
    </AuthProvider>
    
    
  </React.StrictMode>,
)
