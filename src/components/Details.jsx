import React from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Details = () => {
  const singleData = useLoaderData();
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    requireDocuments,
    description,
  } = singleData;
  return (
    <div
      className="hero min-h-screen w-10/12 mx-auto "
      style={{
        backgroundImage: `url(${countryImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{countryName}</h1>
          <h2>
            <span className="font-semibold text-lg">Visa Type: </span>
            {visaType}
          </h2>
          <h2>
            <span className="font-semibold text-lg">Processing Time: </span>
            {processingTime}
          </h2>
          <h2>
            <span className="font-semibold text-lg">Fee: </span>
            {fee}
          </h2>
          <h2>
            <span className="font-semibold text-lg">Validity: </span>
            {validity}
          </h2>
          <h2>
            <span className="font-semibold text-lg">Age Restriction: </span>
            {ageRestriction}
          </h2>
          <h2>
            <span className="font-semibold text-lg">Application Method: </span>
            {applicationMethod}
          </h2>
          <h2>
            <span className="font-semibold text-lg">Require Documents: </span>
            {requireDocuments.join(" , ")}
          </h2>
          <p className="mb-5">
          <span className="font-semibold text-lg">Description: </span>{description}
          </p>
          <button onClick={() => document.getElementById("my_modal_5").showModal()} className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white">Apply for the visa</button>
        </div>
      </div>
      <Modal singleData={singleData}></Modal>
    </div>
  );
};
// split(',').map((docs)=>docs.trim());
export default Details;
