import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProducts/AddProduct";
import MainAdmin from "../components/AdminPannel/MainAdmin/MainAdmin";
import Users from "../components/AdminPannel/Users/Users";
import Login from "../components/Authentication/Login/Login";
import Signup from "../components/Authentication/Signup/Signup";
import CategoryByProducts from "../components/container/Home/Catagories/CategoryByProducts/CategoryByProducts";
import Home from "../components/container/Home/Home";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import Root from "../components/Root/Root";
import AdminRouter from "../PrivateRoutes/AdminRouter";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";
import SellerRouter from "../PrivateRoutes/SellerRouter";

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
                path: '/categorie/:category', element: <PrivateRouter><CategoryByProducts></CategoryByProducts></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/categorie/${params.category}`),
            },

            {
                path: '/admin', element: <MainAdmin></MainAdmin>,
                children: [
                    {
                        path: '/admin/user', element: <AdminRouter><Users></Users></AdminRouter>
                    },
                    {
                        path: '/admin/addproduct', element: <SellerRouter> <AddProduct></AddProduct></SellerRouter>
                    },
                    {
                        path: '/admin/manageproduct', element: <ManageProduct></ManageProduct>
                    },
    
                ]
            }

        ]
    }
])

export default router;