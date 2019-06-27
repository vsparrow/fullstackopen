import React, {useState, useEffect} from "react";


const Country = ({country}) => {

    const countryLanguages = (languages)=>
        languages.map(language => <li key={language.name}>{language.name}</li>)
    
    if(!country){    return (<div></div>)}    
    const name = country.name ? country.name : "" 
    const population = country.population ? country.population : "" 
    const languages = country.languages ? country.languages : []
    const flag = country.flag ? <img src={country.flag} width="100px"/> : ""
    
    return(
        <div>
            <h1>{name}</h1>
            <div>population {population}</div>
            <h2>languages</h2>
            <ul>{countryLanguages(languages)}</ul>
            {flag}          
        </div>    
        
    )
}

export default Country
