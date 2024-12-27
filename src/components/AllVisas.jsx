
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllVisaCard from './allVisaCard';


const AllVisas = () => {
    // const visas = useLoaderData()
    const [allVisa,setVisas]= useState([])
    const [filter,setFilter]= useState("All")
    useEffect(()=>{
        fetch('https://assignment-10-server-psi-nine.vercel.app/visa')
        .then(res =>res.json())
        .then(data=>setVisas(data));
    },[]);
    const handleFilterChange = (e)=>{
        setFilter(e.target.value);
    };

    const filteredVisa = allVisa.filter(visa => filter==="All" || visa.visaType === filter);
    
    return (
                <div>
                    <h1 className="text-center my-5 font-bold text-4xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent ">All Visas</h1>
                    <div className='flex justify-center mb-4'>
                        <select onChange={handleFilterChange} className='p-2 font-bold text-blue-700 border border-gray-300 rounded'>
                            <option value="All">All Type Visa</option>
                            <option value="Tourist Visa">Tourist Visa</option>
                            <option value="Student Visa">Student Visa</option>
                            <option value="Official Visa">Official Visa</option>
                        </select>
                    </div>
                    <div className="w-10/12 mx-auto  grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16">
                        {
                            filteredVisa.map(visa=><AllVisaCard key={visa._id} visa={visa}></AllVisaCard>)
                        }
                    </div>
                </div>
    );
};

export default AllVisas;