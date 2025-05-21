import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Login = lazy(() => import("./login/Login"));

const MainRouters = () => {
   return useRoutes([
      {
         path: "/",
         element: <Layout />,
         children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/login", element: <Login /> },
         ],
      },
   ]);
};

export default MainRouters;
