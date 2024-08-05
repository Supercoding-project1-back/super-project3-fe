import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import SignUp from '../pages/sign-up/SignUp';
import PostDetail from '../pages/post-detail/PostDetail';
import WritePost from '../pages/write-post/WritePost';
import ChatPage from '../pages/chat-page/ChatPage';
import MyPage from '../pages/my-page/MyPage';

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "post-detail", element: <PostDetail /> },
      { path: "write-post", element: <WritePost /> },
      { path: "chat", element: <ChatPage /> },
      { path: "mypage", element: <MyPage /> },
    ],
  }
]);

export default AppRoutes;