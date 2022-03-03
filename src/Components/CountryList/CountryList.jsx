import React, {useEffect}  from 'react';
import axios from 'axios';

 import { Link } from 'react-router-dom'; 


function CountryList(props) {
  const { countries } = props;
  return (
    <div>
    <h2> Countries</h2>
    {countries.map((country)=>{
           return (
            <div> 
               <Link to={`/${country.alpha3Code}`}> {country.name.official} </Link> 
            </div>
          )
        })} 
    </div>
  )
}

export default CountryList;