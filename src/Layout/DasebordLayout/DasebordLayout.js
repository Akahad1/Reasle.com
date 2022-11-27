import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hook/UseAdmin/UseAdmin';
import UseUser from '../../hook/UseUser/UseUser';
import DashBoard from '../../Pages/DashBoard/DashBoard';
import Navber from '../../Pages/Home/Navber/Navber';
import Footer from '../../Shared/Footer/Footer';

const DasebordLayout = () => {
    const {user}=useContext(AuthContext)
    const[isadmin]=useAdmin(user?.email)
    const [isUser]=UseUser(user?.email)
    return (
        <div className=''>
            <Navber></Navber>
            <div class="container mx-auto">
                <div class="flex flex-row flex-wrap py-4">
                    <main role="main" class="w-full  sm:w-2/3 md:w-3/4 pt-1 px-2">
                        <Outlet></Outlet>

                    </main>
                    <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
                        <div class="sticky top-0 p-4 w-full ">

                            <ul class="flex flex-col h-screen overflow-hidden bg-slate-800 border-shadow">
                               <div className='p-6'>
                               {isUser &&<p className=' text-white font-thin mt-2'><Link to='/Deshborad/myorders'>My Orders</Link></p>}
                               <p className=' text-white font-thin mt-2'><Link to='/Deshborad/addproduct'>Add Product</Link></p>
                               <p className=' text-white font-thin mt-2'><Link to='/Deshborad/myproducts'>My Products</Link></p>
                               { isadmin &&<p className=' text-white font-thin mt-2'><Link to='/Deshborad/alluser'>All User</Link></p>}
                               {/* <p className=' text-white font-thin mt-2'><Link to='/Deshborad/allbuyers'>ALL Buyers</Link></p> */}
                               </div>
                                
                                
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
            <Footer></Footer>




        </div>
    );
};

export default DasebordLayout;