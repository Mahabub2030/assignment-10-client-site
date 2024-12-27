import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ApplicationCard from "./ApplicationCard";
import { AuthContext } from "./AuthProvider";

const MyVisaApplication = () => {
  const {user} = useContext(AuthContext)
  // const [search,setSearch]=useState("")
  const loadedApplications = useLoaderData();
  const presonalApplications = loadedApplications.filter(data=>data.email==user?.email)
  const [applications,setApplications]= useState(presonalApplications)
  console.log(applications);
  const handleSearch=(e)=>{
    e.preventDefault()
    const form = e.target
    const search= form.search.value;
    setSearch(search);
  }
  // useEffect(()=> {
  //   fetch(`https://assignment-10-server-psi-nine.vercel.app/application?searchParams=${search}`)
  //   .then(res=> res.json())
  //   .then(data=>{
  //     console.log(data);
  //   })
  // },[search])
  return (
    <div>
      <h1 className="text-center my-5 font-bold text-4xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent p-2">My Visa Applications</h1>
      <form onSubmit={handleSearch}><input on type="text" name="search" placeholder="Search here" className=" mx-auto block input input-bordered w-full max-w-xs" /><input className="mx-auto block" type="submit" value="search" /></form>
      <div className=" w-10/12 mx-auto justify-center items-center flex flex-wrap gap-5">
      {applications.map((application) => (
        <ApplicationCard key={application._id} application={application} applications={applications} setApplications={setApplications}></ApplicationCard>
      ))}
    </div>
    </div>
  );
};

export default MyVisaApplication;
