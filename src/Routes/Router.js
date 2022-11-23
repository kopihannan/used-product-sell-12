import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Signup from "../components/Authentication/Signup/Signup";
import Home from "../components/container/Home/Home";
import Root from "../components/Root/Root";

const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            }
        ]
    }
])

export default router;