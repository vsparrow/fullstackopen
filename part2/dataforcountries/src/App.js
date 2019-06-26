import React, {useState, useEffect} from "react";
import axios from 'axios'
import Countries from './components/Countries'

const App = (props) => {
  const [searchterm, setSearchterm] = useState("")
  const [countries, setCountries] = useState([])
  //INPUT ////////////////////////////////////////
  const handleChange = (event) => {
      setSearchterm(event.target.value)
      console.log("from handleChange",searchterm)
      getData(event.target.value)
  }
  //API RETRIEVAL ////////////////////////////////
  const getData = (name) => {
    axios
    .get('https://restcountries.eu/rest/v2/name/' + name)
    .then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }
  //DISPLAY COUNTRIES ////////////////////////////
  
  // const countryLanguages = (languages)=>
  //   languages.map(language => <li key={language.name}>{language.name}</li>)
  
  // const displayCountries = () => {
  //   // let displayData = <div></div>
  //   if(countries.length === 0) {return <div></div>}
  //   else if(countries.length > 10){return <div>Too many matches, specify another filter</div>}
  //   else if(countries.length > 1) {
  //     const toShow = countries.map(country=><div key={country.alpha3Code}>{country.name}</div>)
  //     return toShow
  //   }
  //   else if(countries.length === 1){
  //     return(
  //       <div>
  //         <h1>{countries[0].name}</h1>
  //         <div>capital {countries[0].capital}</div>
  //         <div>population {countries[0].population}</div>
  //         <h2>languages</h2>
  //         <ul>{countryLanguages(countries[0].languages)}</ul>
  //         <img src={countries[0].flag} width="100px"/>
  //       </div>
  //     )
  //   }
  //   // return()
  // }
  //RETURN ///////////////////////////////////////
  return(
    <div>  
      find countries
      <input value={searchterm} onChange={handleChange}></input>

      <Countries countries={countries}/>
    </div>  
  )
}

export default App