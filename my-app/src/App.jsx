import React from "react";
import useCountries from "./hooks/useCountries";
import { addCountry } from "./services/countryService";
import { rmCountry } from "./services/countryService";



const countryList = () => {
  const {countries, loading, error} = useCountries();


if (loading) { 
  return <p>loading</p>
}

if (error) { 
  return <p>error</p>
}
  return (
    <div>
    <button onClick={addCountry}>add to db</button>
    {/* <form>
      <input input type="text" id="uniqueId" value="value"></input>
    </form> */}
    {/* <form id="animal">
    <label for="animal">What is your favorite animal?</label>
    <input type="text" id="animal" name="country" value="dog"></input>
    <button>Save</button>
  </form> */}

    <button onClick={rmCountry}>Remove from db</button> 
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
    </div>
    
  );
}

export default countryList;