import React, {useState, useEffect} from "react";
import Country from "./Country"
import Weather from "./Weather"

//country is bool if false, country object otherwise
//countries in an array
//setCountry is a method for country
//setCountries is a method for countries
//setPreviewCountry, setPreviewCountry for button view of country
const Countries = ({countries, country, setCountry, setCountries, previewcountry, setPreviewCountry}) => {
    console.log("country is",country)
    let display = <div></div>
    let showCountry = country ? <Country country={country}/> : <div></div>
    let showWeather = country ? <Weather country={country}/> : <div></div>
    let showPreviewCountry = previewcountry ? <Country country={previewcountry}/> : <div></div>
    const countryLanguages = (languages)=>
        languages.map(language => <li key={language.name}>{language.name}</li>)



    if(countries.length === 0) {setCountry(false);display =  <div></div>}
    else if(countries.length > 10){setCountry(false);display =  <div>Too many matches, specify another filter</div>}
    else if(countries.length > 1) {
      setCountry(false);    
      display = countries.map(country=><div key={country.alpha3Code}>{country.name}<button onClick={()=>handleClick(country)}>show</button></div>)
    //   return toShow
    }
    else if(countries.length === 1){setCountry(countries[0]); setPreviewCountry(false)}


    const handleClick = (country) => { //country object is input
        // console.log(country.name)
        if(previewcountry.name == country.name){setPreviewCountry(false)}
        else {setPreviewCountry(country)}
        // console.log("previewcountry is",previewcountry)
    }


    return(
        <div>
            {display}
            {showCountry}
            {showWeather}
            {showPreviewCountry}
        </div>
    )
}

export default Countries