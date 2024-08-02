import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className='flex justify-between w-4/5 mx-auto gap-4'>
            <LeftSidebar />
            <Outlet /> {/* Use <Outlet /> here */}
            <RightSidebar />
        </div>
    );
};

export default Home;
