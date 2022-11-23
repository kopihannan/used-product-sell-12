import { createBrowserRouter } from "react-router-dom";
import Home from "../components/container/Home/Home";
import Root from "../components/Root/Root";

const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        children: [
            {
                path: '/', element: <Home></Home>
            }
        ]
    }
])

export default router;