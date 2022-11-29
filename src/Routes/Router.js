import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProducts/AddProduct";
import MainAdmin from "../components/AdminPannel/MainAdmin/MainAdmin";
import AllSeller from "../components/AdminPannel/Users/AllSeller";
import Users from "../components/AdminPannel/Users/Users";
import Advertise from "../components/AdvertisingSection/Advertise";
import Login from "../components/Authentication/Login/Login";
import Signup from "../components/Authentication/Signup/Signup";
import Blog from "../components/Blog/Blog";
import BuyerBooked from "../components/BuyerBooked/BuyerBooked";
import CategoryByProducts from "../components/container/Home/Catagories/CategoryByProducts/CategoryByProducts";
import Home from "../components/container/Home/Home";
import Error from "../components/ErrorPage/Error";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import Payment from "../components/Payment/Payment";
import Root from "../components/Root/Root";
import AdminRouter from "../PrivateRoutes/AdminRouter";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";
import SellerRouter from "../PrivateRoutes/SellerRouter";

const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>,
        errorElement: <Error></Error>,
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
                path: '/ads', element: <Advertise></Advertise>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },


            {
                path: '/admin', element: <PrivateRouter><MainAdmin></MainAdmin></PrivateRouter>,
                children: [
                    {
                        path: '/admin/user', element: <AdminRouter><Users></Users></AdminRouter>
                    },
                    {
                        path: '/admin/allseller', element: <AdminRouter><AllSeller></AllSeller></AdminRouter>
                    },
                    {
                        path: '/admin/addproduct', element: <SellerRouter> <AddProduct></AddProduct></SellerRouter>
                    },
                    {
                        path: '/admin/manageproduct', element: <SellerRouter><ManageProduct></ManageProduct></SellerRouter> 
                    },
                    {
                        path: '/admin/myorder', element: <BuyerBooked></BuyerBooked>
                    },

                    {
                        path: '/admin/payment/:id', element: <Payment></Payment>,
                        loader: ({params})=> fetch(`http://localhost:5000/booking/${params.id}`)
                    }
    
                ]
            }

        ]
    }
])


export default router;