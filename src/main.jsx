import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Signup from './pages/Signup.jsx';
import App from './App.jsx';
import Home from "./pages/Home.jsx";
import AllPosts from './pages/AllPosts.jsx';
import Post from './pages/Post.jsx';
import AddPost from './pages/AddPost.jsx';
import EditPost from './pages/EditPost.jsx';
import { Provider } from 'react-redux';
import {store} from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Login, AuthLayout } from './components/index.js';
import { StrictMode } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:"/login",
        element: (
          <AuthLayout authentication={false} >
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false} >
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path:"/all-post",
        element: (
        <AuthLayout >
            {" "}
            <AllPosts />
        </AuthLayout>
        ),
      },
      {
        path:"/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
              {" "}
              <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
