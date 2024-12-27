import React from 'react';
import Swal from 'sweetalert2';

const ApplicationCard = ({application, applications, setApplications}) => {
    console.log(application.singleData.countryName);
    const handleDelete=(_id)=>{
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://assignment-10-server-psi-nine.vercel.app/application/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your Application has been deleted.",
                            icon: "success"
                          });
                          const remaining = applications.filter(app=>app._id!==application._id);
                          setApplications(remaining);
                }
            })
            }
          });
    }
    return (
    <div className="card card-compact bg-base-100  shadow-xl my-10">
      <figure>
        <img
          className='size-96 h-60'
          src={application.singleData.countryImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2><span className="font-semibold text-lg">Country Name: </span>{application.singleData.countryName}</h2>
        <h2><span className="font-semibold text-lg">Visa Type: </span>{application.singleData.visaType}</h2>
        <h2><span className="font-semibold text-lg">Processing Time: </span>{application.singleData.processingTime}</h2>
        <h2><span className="font-semibold text-lg">Fee: </span>{application.singleData.fee}</h2>
        <h2><span className="font-semibold text-lg">Validity: </span>{application.singleData.validity}</h2>
        <h2><span className="font-semibold text-lg">Application Method: </span>{application.singleData.applicationMethod}</h2>
        <h2><span className="font-semibold text-lg">Applied Date: </span>{application.appliedDate}</h2>
        <h2><span className="font-semibold text-lg">Applicant's Name: </span>{application.firstName +" "+ application.lastName}</h2>
        <h2><span className="font-semibold text-lg">Applicant’s Email: </span>{application.email}</h2>
        
        <div className="card-actions ">
          <button onClick={()=>handleDelete(application._id)} className='btn bg-gradient-to-r from-purple-700 to-blue-500 text-white'>Cancel</button>
        </div>
      </div>
    </div>
    );
};

export default ApplicationCard;