import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';

const UpdateVisa = () => {
  const { user } = useContext(AuthContext)
  const visa = useLoaderData()

  const navigate = useNavigate()
  const { _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    requireDocuments,
    description } = visa;

  const handleUpdateVisa = e => {
    e.preventDefault();
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const description = form.description.value;
    const email = user.email

    // split(',').map((docs)=>docs.trim());

    const updateVisa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      requireDocuments,
      description, email
    }
    console.log(updateVisa);
    // send data to the server
    fetch(`https://assignment-10-server-psi-nine.vercel.app/visa/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateVisa)
    })
      .then(res => res.json())
      .then(data => {


        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Visa Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })
        }
      })
    navigate('/')
  }
  return (
    <div className="bg-gray-200 w-10/12 mx-auto px-10">
      <h2 className="text-center font-bold text-3xl">Update Visa: {countryName}</h2>
      <form onSubmit={handleUpdateVisa}>
        {/* row */}
        <div className="md:flex gap-10">
          {/*Country Image */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Country Image:</span>
            </label>
            <label className="">
              <input
                type="text"
                name="countryImage"
                defaultValue={countryImage}
                placeholder="Country image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*Country Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Country Name:</span>
            </label>
            <label className="">
              <input
                type="text"
                name="countryName"
                defaultValue={countryName}
                placeholder="Country image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          {/*Visa type */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Visa Type:</span>
            </label>
            <select
              className="border border-gray-300 rounded-lg w-full text-center py-3 px-3 "
              name="visaType"
              defaultValue={visaType}
              placeholder="Visa Type"
            >
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
            </select>
          </div>
          {/*Processing_time */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Processing Time:</span>
            </label>
            <label className="">
              <input
                type="text"
                name="processingTime"
                defaultValue={processingTime}
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* row */}
        <div className="md:flex gap-10">
          {/*Country Image */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Age Restriction:</span>
            </label>
            <label className="">
              <input
                type="number"
                name="ageRestriction"
                defaultValue={ageRestriction}
                min="18"
                placeholder="Minimun 18 years"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*Country Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Fee:</span>
            </label>
            <label className="">
              <input
                type="number"
                name="fee"
                defaultValue={fee}
                placeholder="Fee (Taka)"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* row */}
        <div className="md:flex gap-10">

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Validity:</span>
            </label>
            <label className="">
              <input
                type="text"
                name="validity"
                defaultValue={validity}
                placeholder="Validity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/*Country Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Application Method:</span>
            </label>
            <label className="">
              <input
                type="text"
                name="applicationMethod"
                defaultValue={applicationMethod}
                placeholder="Application Method"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* require documents */}
        <div>
          <label className="label">
            <span className="label-text font-semibold text-lg">Require Documents:</span>
          </label>
          <div className="grid md:grid-cols-3 justify-center gap-4 ">
            <label>
              <input
                type="checkbox"
                name="requireDocuments"
                value="Valid Passport"
              />
              <span className="ml-2 font-semibold">Valid Passport</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="requireDocuments"
                value="Visa aplication form"
              />
              <span className="ml-2 font-semibold">Visa Aplication Form</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="requireDocuments"
                value="Recent passport-sized photograph"
              />
              <span className="ml-2 font-semibold">Recent passport-sized photograph</span>
            </label>
          </div>
        </div>
        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text font-semibold text-lg">Description:</span>
          </label>
          <textarea className="border border-gray-300 rounded-lg text-center w-full " name="description" defaultValue={description} placeholder="Description" rows="8" ></textarea>
        </div>
        <input type="submit" value="Update Visa" className="btn btn-block my-4 bg-gradient-to-r from-purple-700 to-blue-500 text-white" />
      </form>
    </div>
  );
};

export default UpdateVisa;