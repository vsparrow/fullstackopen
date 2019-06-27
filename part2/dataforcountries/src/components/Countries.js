import React, {useState, useEffect} from "react";
import Country from "./Country"



const Countries = ({countries, country, setCountry}) => {
    // console.log("length from props is",countries.length)
    
    let showCountry = country ? <Country country={countries[0]}/> : <div></div>
    
    const countryLanguages = (languages)=>
        languages.map(language => <li key={language.name}>{language.name}</li>)
  
    let display = <div></div>
    if(countries.length === 0) {setCountry(false);display =  <div></div>}
    else if(countries.length > 10){setCountry(false);display =  <div>Too many matches, specify another filter</div>}
    else if(countries.length > 1) {
        setCountry(false);    
      display = countries.map(country=><div key={country.alpha3Code}>{country.name}</div>)
    //   return toShow
    }
    else if(countries.length === 1){
        setCountry(true)    
    //   display = (
    //     <div>
    //       <h1>{countries[0].name}</h1>
    //       <div>capital {countries[0].capital}</div>
    //       <div>population {countries[0].population}</div>
    //       <h2>languages</h2>
    //       <ul>{countryLanguages(countries[0].languages)}</ul>
    //       <img src={countries[0].flag} width="100px"/>
    //     </div>
    //   )
    }

    return(
        <div>

            {display}
            {showCountry}
        </div>
    )
}

export default Countries