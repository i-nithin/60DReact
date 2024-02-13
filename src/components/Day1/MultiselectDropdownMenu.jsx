import React, { useState } from 'react';
import './select.css'; 

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const countries = [
      { name: 'India', cities: ['Kochi', 'Bangalore', 'Chennai'] },
    { name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
    { name: 'UK', cities: ['London', 'Manchester', 'Birmingham'] },

  ];
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity('');
  };
  
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  
  return (
    <div className="country-selector">
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map(country => (
          <option key={country.name} value={country.name}>{country.name}</option>
        ))}
      </select>
      
      {selectedCountry && (
        <>
          <label htmlFor="cities">Select City:</label>
          <select id="cities" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {countries.find(country => country.name === selectedCountry).cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </>
      )}
      
      {selectedCity && (
        <p className="selected-info">You selected {selectedCity} in {selectedCountry}.</p>
      )}
    </div>
  );
};

export default CountrySelector;
