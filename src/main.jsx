import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/HomeLayout/Home';

import Error from './Components/Common/Error';

import HomePages from './Components/HomeLayout/HomePages';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register';
import AuthLayout from './Components/Users/AuthLayout';
import CardDetails from './Components/HomeLayout/Cards/CardDetails'
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Components/Routes/PrivateRoutes';
import UpdateProfile from './Components/Profiles/UpdateProfile';
import Userprofile from './Components/Profiles/Userprofile';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import ForgetPass from './Components/Users/ForgetPass';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <HomePages/>,
      },
      {
        path: "/update-profile",
        element:
        <PrivateRoute>
          <UpdateProfile/>
        </PrivateRoute>,
      },
      {
        path: "/my-profile",
        element: <PrivateRoute>
          <Userprofile/>
        </PrivateRoute>,
        
      },
      {
        path: "/details/:id",
        element: <PrivateRoute>
                      <CardDetails/>
                  </PrivateRoute>,
        loader: async({params})=>{
          const res = await fetch('/adventure.json')
          const data = await res.json()
          const singleData = data.find(d=> d.id == params.id)
          return singleData
        }
      }
    ]
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login", 
        element: <Login />
      },
      {
        path: "register", 
        element: <Register />
      },
      {
        path: "forget-password", 
        element:<ForgetPass />
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
