import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";
import PostDetail from "../pages/post-detail/PostDetail";
import WritePost from "../pages/write-post/WritePost";
import ChatPage from "../pages/chat/Chat";
import Profile from "../pages/profile/Profile";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "post/new", element: <WritePost /> },
      { path: "chat", element: <ChatPage /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default AppRoutes;