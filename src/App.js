import React, {lazy, Suspense, useEffect, useState} from 'react'
import { Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"

import  ReactDOM  from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'

import About from './components/About'
import Cart from './components/Cart'
import Error from './components/Error'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import Shimmer from './components/Shimmer'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
const Grocery = lazy( () => import("./components/Grocery") )
import appStore from './utils/appStore'

const AppLayout = () => {
    
    const[userName, setUserName]=useState()
    
    useEffect(()=>{
        const data = {
            name:"Prasad"
        }
        setUserName(data.name)
    },[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className='app-container'>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
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
                path:'/grocery',
                element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu />
            },
        ],
        errorElement:<Error />
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)