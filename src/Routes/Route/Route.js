import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CatagoryProdutucs from "../../Pages/Home/CatagoryProducts/CatagoryProdutucs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";

 const router =createBrowserRouter([
    {path:'/', element: <Main></Main>,
    children:[
        {path:'/',element: <Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/singup',element:<SingUp></SingUp>},
        {path:'/catagory/:id',element:<CatagoryProdutucs></CatagoryProdutucs>,
        loader: async({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
    }
    ]
}
])
export default router;