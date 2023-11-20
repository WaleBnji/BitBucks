import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from '../src/pages/Home'
import Crypto from '../src/pages/Crypto'

import Saved from '../src/pages/Saved'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Trending from './pages/trending'
import { QueryClient, QueryClientProvider } from 'react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
   
    children: [
      {
        path: "/",
        element: <Crypto />
      },
      {
        path: "/trending",
        element: <Trending />
      },
      {
        path: "/saved",
        element: <Saved />
      },
    ],
  },
]);
 const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />

    </QueryClientProvider>
  </React.StrictMode>,
)
