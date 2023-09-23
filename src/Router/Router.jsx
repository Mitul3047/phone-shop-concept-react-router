import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import LogIn from "../Pages/LogIn/LogIn";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/phones.json')
            },
            {
                path: '/favorites',
                element:<Favorites></Favorites>
            },
            {
                path: '/login',
                element:<LogIn></LogIn>
            } 
        ]
    }
])


export default Router;