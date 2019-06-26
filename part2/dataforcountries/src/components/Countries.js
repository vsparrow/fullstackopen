import React, {useState, useEffect} from "react";

const Countries = ({countries}) => {
    console.log("length from props is",countries.length)
    
    const countryLanguages = (languages)=>
        languages.map(language => <li key={language.name}>{language.name}</li>)
  
    let display = <div></div>
    if(countries.length === 0) {display =  <div></div>}
    else if(countries.length > 10){display =  <div>Too many matches, specify another filter</div>}
    else if(countries.length > 1) {
      display = countries.map(country=><div key={country.alpha3Code}>{country.name}</div>)
    //   return toShow
    }
    else if(countries.length === 1){
      display = (
        <div>
          <h1>{countries[0].name}</h1>
          <div>capital {countries[0].capital}</div>
          <div>population {countries[0].population}</div>
          <h2>languages</h2>
          <ul>{countryLanguages(countries[0].languages)}</ul>
          <img src={countries[0].flag} width="100px"/>
        </div>
      )
    }

    return(
        <div>
            Countries Component
            {display}
        </div>
    )
}

export default Countries