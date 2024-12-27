import React from 'react';
import sad from '../assets/sad.webp'
const Error = () => {
    return (
        <div className='flex flex-col  items-center gap-5 mt-80'>
                <h2 className='text-5xl font-semibold'>Page Not Found</h2>
                <img className='size-10' src={sad} alt="" />
                <p className='text-3xl font-semibold'>Go Back To Home</p>
                <button className='px-4 py-3 bg-blue-300 rounded-lg'><a href="/">Home</a></button>
            </div>
    );
};

export default Error;