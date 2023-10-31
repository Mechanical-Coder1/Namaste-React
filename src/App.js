import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"

import  ReactDOM  from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'

import About from './components/About'
import Cart from './components/Cart'
import Error from './components/Error'
import Contact from './components/Contact'

const AppLayout = () => {
    return(
        <div className='app-container'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/cart',
                element:<Cart />
            }
        ],
        errorElement:<Error />
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)