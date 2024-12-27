import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import PCard from './PCard';

const MyAddedVisa = () => {
    const {user} = useContext(AuthContext)
    const loadedData = useLoaderData()
    // console.log(loadedData);
    const presonalDatas = loadedData.filter(data=>data.email==user?.email)
    const [personalData,setPersonalData]=useState(presonalDatas)
    console.log(personalData);

    return (
        <div>
            <h1 className="text-center my-5 font-bold text-4xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent p-2">My Added Visa</h1>
            <div className="w-10/12 mx-auto  grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-16">
            {
                personalData.map(data=><PCard key={data._id} data={data} personalData={personalData} setPersonalData={setPersonalData}></PCard>)
            }
        </div>
        </div>
    );
};

export default MyAddedVisa;