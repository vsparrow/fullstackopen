import React, {useState, useEffect} from "react";
import Country from "./Country"


const Countries = ({countries, country, setCountry}) => {

    let display = <div></div>
    let showCountry = country ? <Country country={countries[0]}/> : <div></div>
    const countryLanguages = (languages)=>
        languages.map(language => <li key={language.name}>{language.name}</li>)

    if(countries.length === 0) {setCountry(false);display =  <div></div>}
    else if(countries.length > 10){setCountry(false);display =  <div>Too many matches, specify another filter</div>}
    else if(countries.length > 1) {
      setCountry(false);    
      display = countries.map(country=><div key={country.alpha3Code}>{country.name}</div>)
    //   return toShow
    }
    else if(countries.length === 1){setCountry(true)}

    return(
        <div>
            {display}
            {showCountry}
        </div>
    )
}

export default Countries