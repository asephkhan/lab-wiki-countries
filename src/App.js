import './App.css';
import countriesData from './countries.json';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetail from './Components/CountryDetail/CountryDetail';

import Navbar from './Components/Navbar/Navbar';
import CountryList from './Components/CountryList/CountryList';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountryList countries={countries} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetail bananas={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
