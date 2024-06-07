import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost, {action as postAction} from './routes/NewPost.jsx'
import RootLayout from './routes/RooLayout.jsx'
import PostDetails, {loader as postDetailLoader} from './routes/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children:[
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: postAction,
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: postDetailLoader
          }
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
