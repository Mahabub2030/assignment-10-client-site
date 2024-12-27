import React from 'react';
import { NavLink } from 'react-router-dom';

const AllVisaCard = ({visa}) => {
    const {_id,
        countryImage,
          countryName,
          visaType,
          processingTime,
          ageRestriction,
          fee,
          validity,
          applicationMethod,
          requireDocuments,
          description} = visa;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-60"
            src={countryImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2><span className="font-semibold text-lg">Country Name: </span>{countryName}</h2>
          <h2><span className="font-semibold text-lg">Visa Type: </span>{visaType}</h2>
          <h2><span className="font-semibold text-lg">Processing Time: </span>{processingTime}</h2>
          <h2><span className="font-semibold text-lg">Fee: </span>{fee}</h2>
          <div className="card-actions ">
            <NavLink to={`/details/${_id}`}><button className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white">See Details</button></NavLink>
          </div>
        </div>
      </div>
    );
};

export default AllVisaCard;