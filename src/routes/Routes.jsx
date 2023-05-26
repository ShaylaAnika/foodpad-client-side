import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import ChefDetail from '../pages/ChefDetails/ChefDetail';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/chefs/:id",
            element: <PrivateRoute><ChefDetail></ChefDetail></PrivateRoute>,
            loader:({params}) => fetch(`https://assignment-10-cookpad-server-anikabcic-gmailcom.vercel.app/chefs/${params.id}`)
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: '/blog',
            element:<Blog></Blog>   
       }

        
        
      ]

    }
   
    
    

     

  ]);

export default router;