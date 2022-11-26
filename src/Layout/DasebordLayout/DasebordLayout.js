import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashBoard from '../../Pages/DashBoard/DashBoard';
import Navber from '../../Pages/Home/Navber/Navber';

const DasebordLayout = () => {
    return (
        <div className='h-screen'>
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
                               <Link to='/Deshborad/myorders'>My Orders</Link>
                               </div>
                                
                                
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>




        </div>
    );
};

export default DasebordLayout;