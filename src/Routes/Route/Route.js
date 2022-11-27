import { createBrowserRouter } from "react-router-dom";
import DasebordLayout from "../../Layout/DasebordLayout/DasebordLayout";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import CatagoryProdutucs from "../../Pages/Home/CatagoryProducts/CatagoryProdutucs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProducts from "../../Pages/SellerInformation/AddProducts/AddProducts";
import Advertisted from "../../Pages/SellerInformation/Advertisted/Advertisted";
import MyProducts from "../../Pages/SellerInformation/MyProducts/MyProducts";
import SingUp from "../../Pages/SingUp/SingUp";
import AllUsers from "../../Pages/UserInformation/AllUsers/AllUsers";
import MyOrders from "../../Pages/UserInformation/MyOrders/MyOrders";

import PrivetRoute from "../PrivetRoute/PrivetRoute";

 const router =createBrowserRouter([
    {path:'/', element: <Main></Main>,
    children:[
        {path:'/',element: <Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/singup',element:<SingUp></SingUp>},
        {path:'/products/:id',element:<PrivetRoute><CatagoryProdutucs></CatagoryProdutucs></PrivetRoute>,
        loader: async({params})=>fetch(`http://localhost:5000/products/${params.id}`)
    },
    {path:'/blogs',element:<Blogs></Blogs>}
    ],
    
},
{path:'/Deshborad',element:<DasebordLayout></DasebordLayout>,
children:[
    {path:'/Deshborad',element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>},
    {path:"/Deshborad/myorders",element: <PrivetRoute><MyOrders></MyOrders></PrivetRoute>},
    {path:'/Deshborad/addproduct',element:<PrivetRoute><AddProducts></AddProducts></PrivetRoute>},
    {path:'/Deshborad/myproducts',element:<PrivetRoute><MyProducts></MyProducts></PrivetRoute>},
    {path:"/Deshborad/alluser",element:<PrivetRoute><AllUsers></AllUsers></PrivetRoute>},
    {path:"/Deshborad/advertisted",element:<PrivetRoute><Advertisted></Advertisted></PrivetRoute>}


]

},
{path:'*' ,element: "404 your see Rong Route"}
])
export default router;