import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ShoesPage from "../Pages/ShoesPage";
import JerseyPage from "../Pages/JerseyPage";
import SunglassPage from "../Pages/SunglassPage";
import SingleSunglass from "../Pages/SingleSunglass";
import SingleJersey from "../Pages/SingleJersey";
import SingleShoe from "../Pages/SingleShoe";
import Login from "../AuthPages/Login/Login";
import Register from "../AuthPages/Register/Register";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/shoes",
        element: <ShoesPage />,
        loader: () => fetch("https://sports-corner-server.vercel.app/shoes"),
    },
    {
        path: "/shoes/:id",
        element: <SingleShoe />,
        loader: ({ params }) => fetch(`https://sports-corner-server.vercel.app/shoes/${params.id}`),
    },
    {
        path: "/jerseys",
        element: <JerseyPage />,
        loader: () => fetch("https://sports-corner-server.vercel.app/jerseys"),
    },
    {
        path: "/jerseys/:id",
        element: <SingleJersey />,
        loader: ({ params }) => fetch(`https://sports-corner-server.vercel.app/jerseys/${params.id}`),
    },
    {
        path: "/sunglasses",
        element: <SunglassPage />,
        loader: () => fetch("https://sports-corner-server.vercel.app/sunglasses"),
    },
    {
        path: "/sunglasses/:id",
        element: <SingleSunglass />,
        loader: ({ params }) => fetch(`https://sports-corner-server.vercel.app/sunglasses/${params.id}`),
    },
]);

export default router;