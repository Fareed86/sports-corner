import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShoesPage from "../Pages/ShoesPage";
import JerseyPage from "../Pages/JerseyPage";
import SunglassPage from "../Pages/SunglassPage";
import SingleSunglass from "../Pages/singleSunglass";
import SingleJersey from "../Pages/SingleJersey";
import SingleShoe from "../Pages/SingleShoe";
import Login from "../AuthPages/Login/Login";
import Register from "../AuthPages/Register/Register";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/contact',
        element: <Contact></Contact>
    },
    {
        path: '/shoes',
        element: <ShoesPage></ShoesPage>,
        loader: () => fetch('http://localhost:3000/shoes')
    },
    {
        path: '/jerseys',
        element: <JerseyPage></JerseyPage>,
        loader: () => fetch('http://localhost:3000/jerseys')
    },
    {
        path: '/sunglasses',
        element: <SunglassPage></SunglassPage>,
        loader: () => fetch('http://localhost:3000/sunglasses')
    },
    {
        path: '/sunglasses/:id',
        element: <SingleSunglass></SingleSunglass>,
        loader: ({params}) => fetch(`http://localhost:3000/sunglasses/${params.id}`)
    },
    {
        path: '/jerseys/:id',
        element: <SingleJersey></SingleJersey>,
        loader: ({params}) => fetch(`http://localhost:3000/jerseys/${params.id}`)
    },
    {
        path: '/shoes/:id',
        element: <SingleShoe></SingleShoe>,
        loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
    },
])

export default router;