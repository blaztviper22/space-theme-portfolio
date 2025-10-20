import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export let router = createBrowserRouter([
    {
        index: true,
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);
