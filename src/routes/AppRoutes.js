import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import Main from "../pages/main/Main";
import { Login, SignUp } from "../pages/auth";
import { PostDetail } from "../pages/post-detail";
import { WritePost } from "../pages/write-post";
import { Chat, ChatDetail } from "../pages/chat";
import { Profile } from "../pages/profile";

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
      { path: "chat", element: <Chat /> },
      { path: "chat/:id", element: <ChatDetail /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default AppRoutes;