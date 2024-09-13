import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout";
import Main from "../pages/main/Main";
import { Login, AddInfo, KakaoRedirect } from "../pages/auth";
import { PostDetail } from "../pages/post-detail";
import { WritePost } from "../pages/write-post";
import { Chat, ChatDetail } from "../pages/chat";
import { Profile, EditProfile, MyPosts } from "../pages/profile";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRoute element={<Main />} /> },
      { path: "login", element: <Login /> },
      { path: "auth/kakao/callback", element: <KakaoRedirect /> },
      { path: "addinfo", element: <AddInfo /> },
      { path: "post/:id", element: <PostDetail /> },
      { path: "post/new", element: <WritePost /> },
      { path: "post/edit/:id", element: <WritePost /> },
      { path: "chat", element: <Chat /> },
      { path: "chat/:id", element: <ChatDetail /> },
      { path: "profile", element: <Profile /> },
      { path: "editprofile", element: <EditProfile /> },
      { path: "myposts", element: <MyPosts /> },
    ],
  },
]);

export default AppRoutes;
