import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import LogIn from "../Pages/LogIn/LogIn";
import ShowDetails from "../Pages/ShowDetails/ShowDetails";
import ErrorPages from "../Pages/Errorpages/ErrorPages";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
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
            },
            {
                path: '/phones/:id',
                element:<ShowDetails></ShowDetails>
            }
        ]
    }
])


export default Router;