import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <section>
      <h1 className="text-center text-5xl font-bold text-red-500 py-2">
        Total Rest Countries: {countries.length}
      </h1>
      <div className="md:w-10/12 mx-auto grid md:grid-cols-3 gap-4 px-4 mt-4">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </section>
  );
};

export default Countries;