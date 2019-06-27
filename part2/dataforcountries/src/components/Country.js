import React, {useState, useEffect} from "react";


const Country = ({country}) => {
    // console.log("inside component COUNTRY")
    // console.log("length is ",country.length)
    // console.log("country is ",country)
    // console.log("************")
    
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
    
    

    
    // const countryLanguages = (languages)=>
    //     languages.map(language => <li key={language.name}>{language.name}</li>)    
    //  return(
    //     <div>
    //     </div>)

    // return(
    //     <div>
    //         Country
    //       <h1>{name}</h1>
    //       <div>capital {country[0].capital}</div>
    //       <div>population {country[0].population}</div>
    //       <h2>languages</h2>
    //       <ul>{countryLanguages(country[0].languages)}</ul>
    //       <img src={country[0].flag} width="100px"/>          
    //     </div>   
    // )
}

export default Country
