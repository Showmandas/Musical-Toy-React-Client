import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blog from "./components/BlogPage/Blog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import AddToy from "./components/AddToy/AddToy";
import Alltoy from "./components/AllToy/Alltoy";
import Mytoy from "./components/MyToy/Mytoy";
import Update from "./components/Update/Update";
import ViewDetails from "./components/AllToy/ViewDetails";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addtoy",
        element: <AddToy/>,
      },
      {
        path: "/alltoy",
        element: <Alltoy/>,
      },
      {
        path: "/mytoy",
        element: <PrivateRoute><Mytoy/></PrivateRoute>,
      },
      {
        path: "/alltoy/:id",
        element:<PrivateRoute><ViewDetails/></PrivateRoute> ,
        loader:({params})=>fetch(`https://musical-toy.vercel.app/alltoy/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update/>,
        loader:({params})=>fetch(`https://musical-toy.vercel.app/mytoy/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);  
