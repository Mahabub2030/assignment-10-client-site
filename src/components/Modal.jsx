import React, { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "./AuthProvider";

// Email(logged in users email)
// ○ FirstName
// ○ LastName
// ○ Applieddate(current date)
// ○ Fee(visa fee)
// ○ “Apply” button.
const Modal = ({singleData}) => {
  const {user}=useContext(AuthContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const appliedDate = e.target.appliedDate.value;
        const fee = e.target.fee.value;
        const applicationInfo ={email,firstName,lastName,appliedDate,fee,singleData}
        console.log(applicationInfo);

        // send data to the server
        fetch('https://assignment-10-server-psi-nine.vercel.app/application',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(applicationInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Application Done',
              icon: 'success',
              confirmButtonText: 'Done'
            })
          }
        })

    }
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box bg-blue-200">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
              Email:
              </span>
            </label>
            <label className="">
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
              First Name:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
              Last Name:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
              Applied Date:
              </span>
            </label>
            <label className="">
              <input
                type="date"
                name="appliedDate"
                placeholder="Applied Date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
              Fee:
              </span>
            </label>
            <label className="">
              <input
                type="number"
                name="fee"
                defaultValue={singleData.fee}
                placeholder="Fee"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white mt-4" type="submit">Apply</button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
