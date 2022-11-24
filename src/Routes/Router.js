import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Signup from "../components/Authentication/Signup/Signup";
import CategoryByProducts from "../components/container/Home/Catagories/CategoryByProducts/CategoryByProducts";
import Home from "../components/container/Home/Home";
import Root from "../components/Root/Root";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";

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
            },
            {
                path: '/categories/:category', element: <PrivateRouter><CategoryByProducts></CategoryByProducts></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category}`)
            }
        ]
    }
])

export default router;