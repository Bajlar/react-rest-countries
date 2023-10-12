import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Modal from '../Modal/Modal';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleShowDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  };

  return (
    <section>
      <h1 className="text-center text-3xl text-purple-500 md:text-5xl font-bold md:text-red-500 md:py-2">
        Total Rest Countries: {countries.length}
      </h1>
      <div className="md:w-10/12 mx-auto grid md:grid-cols-3 gap-4 px-4 mt-4">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleShowDetails={handleShowDetails}
          ></Country>
        ))}
      </div>
      <div>
        <Modal details={details} />
      </div>
    </section>
  );
};

export default Countries;
