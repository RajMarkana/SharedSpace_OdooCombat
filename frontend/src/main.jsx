import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Error404 from './pages/Error404.jsx';
import Register from './pages/Register.jsx';
import UserDashboard from './pages/user/UserDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/user/*",
    element: <UserDashboard />
  },
  {
    path: "*",
    element: <Error404/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
