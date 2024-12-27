import { NavLink } from "react-router-dom";

const VisaCard = ({visa}) => {
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
          src={countryImage}
          alt="Flag"
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
          <NavLink to={`/details/${_id}`}><button className="btn  bg-gradient-to-r from-purple-700 to-blue-500 text-white">See Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
