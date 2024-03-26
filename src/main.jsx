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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('data.json'),
      },
      {
        path: "/:bookId",
        element: <Book></Book>,
        loader: () => fetch('data.json'),
      },
      {
        path: "/listedbooks",
        element: <div></div>
      },
      {
        path: "/pagestoread",
        element: <div></div>
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
