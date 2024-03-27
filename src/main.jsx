import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './Home.jsx';
import Book from './components/Book.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListedBooks from './components/ListedBooks.jsx';
import Wishlist from './components/Wishlist.jsx';
import ListedBook from './components/ListedBook.jsx';
import PagesToRead from './components/PagesToRead.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: "/:bookId",
        element: <Book></Book>,
        loader: () => fetch('/data.json'),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks/>,
        children:[
          {
            path: '/listedbooks',
            element: <ListedBook></ListedBook>,
            loader: () => fetch('/data.json'),
          },
          {
            path: 'wishlist',
            loader: () => fetch('/data.json'),
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: "/pagestoread",
        element: <PagesToRead/>,
        loader: () => fetch('/data.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
