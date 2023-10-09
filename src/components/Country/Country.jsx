import React from "react";

const Country = ({ country }) => {
  const {
    name,
    capital,
    region,
    area,
    flags,
    startOfWeek,
    population,
  } = country;

  return (
    <div className="card bg-base-100 shadow-md m-2">
      <figure>
        <img src={flags?.png} className="w-full h-56" alt="country" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl">Name: {name?.common}</h2>
        <p className="text-lg">
          <strong>Population: </strong>
          {population}
        </p>
        <p className="text-lg">
          <strong>Area: </strong>
          {area}
        </p>
        <p className="text-lg">
          <strong>Capital: </strong>
          {capital ? capital : "Not found"}
        </p>
        <p className="text-lg">
          <strong>Region: </strong>
          {region}
        </p>
        <p className="text-lg">
          <strong>StartOfWeek: </strong>
          {startOfWeek}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary text-white mt-4">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
