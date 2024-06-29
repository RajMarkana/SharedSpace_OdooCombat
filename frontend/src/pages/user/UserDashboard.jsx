import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Dashboard from './Dashboard';
import Error404 from '../Error404';
import AddResource from './AddResource';
import ViewResource from './ViewResource';

const UserDashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [UserName, setUserName] = useState();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

  return (
    <>
  <div className='  grid grid-cols-5'>

<div className={`sm:col-span-1 col-span-3 ${sidebarOpen ? 'block' : 'hidden'}`}>
    <Sidebar />
</div>

<div className={` ${sidebarOpen ? 'sm:col-span-4 col-span-2 ' : ' sm:col-span-5 col-span-5'} px-3 pt-3 rounded-2xl  h-screen overflow-y-auto overflow-x-hidden`}>

    <div className='z-10 rounded-2xl bg-slate-200  flex justify-between items-center sticky top-0 w-full p-7'>
        <div className='flex justify-center items-center gap-10'>
            <GiHamburgerMenu className='text-2xl cursor-pointer ' onClick={toggleSidebar} />
            <h2 className='font-bold text-2xl'>
                <Routes>
                    <Route path='/' element={'Dashboard'}></Route>
                    <Route path='/add-resource' element={'Add Resource'}></Route>
                    <Route exact path='/view-resource' element={'View Resource'}></Route>
                    <Route path='/given-feedback' element={'Given Feedback'}></Route>
                    <Route path='/system-feedback' element={'System Feedback'}></Route>
                    <Route path='/start-quiz/:id' element={'Start Quiz'}></Route>
                </Routes>

            </h2>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <p className='font-medium text-xl'>{UserName}</p>
            <img src="../vite.svg" alt="Image" className='rounded-full' />
        </div>
    </div>

    <br />

    <div className='p-3 '>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/add-resource' element={<AddResource/>}></Route>
            <Route path='/view-resource' element={<ViewResource/>}></Route>
            <Route path='/given-feedback' element={<Dashboard/>}></Route>
            <Route path='/system-feedback' element={<Dashboard/>}></Route>
            <Route path='/start-quiz/:id' element={<Dashboard/>}></Route>
            <Route path='*' element={<Error404 />}></Route>
        </Routes>

    </div>

</div>
</ div>
    </>
  )
}

export default UserDashboard