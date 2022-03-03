import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail(props) {
  const { id } = useParams();
  
  const foundCountry = props.bananas.find((oneCountry) => {
    return oneCountry.alpha3Code === id;
   
  }); 
  
  return (
    <div>
      
      <h2>CountryDetail</h2>
       {!foundCountry && <h1> Country Not Found!</h1>}
      {foundCountry && (
        <>
          <h3>CountryName: {foundCountry.name.official}</h3>
          <p>{foundCountry.area}</p>
        </>
      )} 
     
    </div>
  );
}

export default CountryDetail;
