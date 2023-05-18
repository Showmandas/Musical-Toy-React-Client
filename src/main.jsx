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
