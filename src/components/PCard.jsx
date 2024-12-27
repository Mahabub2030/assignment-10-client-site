import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const PCard = ({data,personalData,setPersonalData}) => {
    console.log(data);
    const {_id,
        countryImage,
        countryName,
        visaType,
        processingTime,
        fee,
        validity,
        applicationMethod,
        }=data

        const handleDelete=(_id) => {
            console.log(_id);
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
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                fetch(`https://assignment-10-server-psi-nine.vercel.app/visa/${_id}`,{
                    method:'DELETE'
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your Visa has been deleted.",
                                icon: "success"
                              });
                              const remaining = personalData.filter(data=>data._id !==_id)
                              setPersonalData(remaining)
                    }
                })
                }
              });
        }
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img
          src={countryImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2><span className="font-semibold text-lg">Country Name: </span>{countryName}</h2>
        <h2><span className="font-semibold text-lg">Visa Type: </span>{visaType}</h2>
        <h2><span className="font-semibold text-lg">Processing Time: </span>{processingTime}</h2>
        <h2><span className="font-semibold text-lg">Fee: </span>{fee}</h2>
        <h2><span className="font-semibold text-lg">Validity: </span>{validity}</h2>
        <h2><span className="font-semibold text-lg">Application Method: </span>{applicationMethod}</h2>
        <div className="card-actions ">
          <NavLink to={`/updateVisa/${_id}`}><button  className='btn bg-gradient-to-r from-purple-700 to-blue-500 text-white'>Update</button></NavLink>
          <button onClick={()=>handleDelete(_id)}  className='btn bg-gradient-to-r from-purple-700 to-blue-500 text-white'>Delete</button>
        </div>
      </div>
    </div>
    );
};

export default PCard;