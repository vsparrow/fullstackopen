import React, {useState, useEffect} from "react";
import axios from 'axios'
import Countries from './components/Countries'

const App = (props) => {
  const [searchterm, setSearchterm] = useState("")
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(false)
  const [previewcountry, setPreviewCountry] = useState(false)
  
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

  return(
    <div>  
      find countries
      <input value={searchterm} onChange={handleChange}></input>

      <Countries countries={countries} country={country} setCountry={setCountry} setCountries={setCountries} previewcountry={previewcountry} setPreviewCountry={setPreviewCountry}/>
    </div>  
  )
}

export default App