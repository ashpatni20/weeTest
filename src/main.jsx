// import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddUsers from './components/AddUsers'
import Retrieve from './components/Retrieve'
import ContactContext from './components/ContactContext'


const AppRouter = createBrowserRouter([
    {
        path: "/",
        element : <Home/>,
        children :[
            {
                path : "/",
                element : <AddUsers/>,
            },
            {
                path : "/retrieve",
                element : <Retrieve/>,
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(

    // <Home/>
    <ContactContext>
        <RouterProvider router={AppRouter}/>
    </ContactContext>
)
