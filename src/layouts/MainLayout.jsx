import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    const[darkMode,setDarkMode]= useState(false);

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode)
    }
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className=' dark:bg-neutral-800'>
            <button onClick={toggleDarkMode} className='absolute w-16 h-5 top-16 right-[9%] bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-bold text-sm'>{darkMode?"Light":"Dark"}</button>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default MainLayout;