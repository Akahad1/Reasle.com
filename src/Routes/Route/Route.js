import { createBrowserRouter } from "react-router-dom";
import DasebordLayout from "../../Layout/DasebordLayout/DasebordLayout";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import CatagoryProdutucs from "../../Pages/Home/CatagoryProducts/CatagoryProdutucs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";
import MyOrders from "../../Pages/UserInformation/MyOrders/MyOrders";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

 const router =createBrowserRouter([
    {path:'/', element: <Main></Main>,
    children:[
        {path:'/',element: <Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/singup',element:<SingUp></SingUp>},
        {path:'/catagory/:id',element:<PrivetRoute><CatagoryProdutucs></CatagoryProdutucs></PrivetRoute>,
        loader: async({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
    },
    {path:'/blogs',element:<Blogs></Blogs>}
    ],
    
},
{path:'/Deshborad',element:<DasebordLayout></DasebordLayout>,
children:[
    {path:'/Deshborad',element:<DashBoard></DashBoard>},
    {path:"/Deshborad/myorders",element:<MyOrders></MyOrders>}

]

}
])
export default router;