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
        path:'/service',
      element:<Events></Events>,
      loader: () => fetch('/Data.json'),
      },
      {
        path:'/service/:id',
        element:<EventSet></EventSet>,
        loader: () => fetch('/Data.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
