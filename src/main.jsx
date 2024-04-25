import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './Component/Users.jsx';
import AddUser from './Component/AddUser.jsx';
import Provider from './Provider.jsx';
import Edit from './Component/Edit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
 {
  path: "/",
  element: <Users></Users>,
  loader:()=>fetch(`https://user-management-systemt-server.vercel.app/users`)
 },
 { path: "/add-user",
  element: <AddUser></AddUser>,
 },
 { path: "/edit-user/:id",
  element: <Edit></Edit>,
  loader:({params})=>fetch(`https://user-management-systemt-server.vercel.app/user/${params.id}`)

 },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
