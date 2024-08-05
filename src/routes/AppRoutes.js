import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import SignUp from '../pages/sign-up/SignUp';


const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  }
]);

export default AppRoutes;