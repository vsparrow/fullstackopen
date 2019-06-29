import React, {useState, useEffect} from 'react'
import axios from 'axios'
import apikey from './apikey'
const Weather = (props) => {
    // console.log("api key is",apikey)
    const country = props.country
    const capitalURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&APPID=9c39fa3ce9d953fdd507d7d9f77093ef&lang=eng&units=metric%22'
    // console.log(typeof capitalURL)
    
    const [temp, setTemp] = useState("")
    const [windspeed, setWindspeed] = useState("")
    const [windDegree, setWindDegree] = useState(0)
    const [icon, setIcon] = useState("")
    
    const windDirection = ()=>{
        let direction = ""
        if(windDegree > 290){direction = "N"}
        else if(windDegree > 210){direction = "W"}
        else if(windDegree > 150){direction = "S"}
        else if(windDegree > 30){direction = "E"}
        else if(windDegree > 0){direction = "N"}
        return direction
    }
    
      useEffect( async () => {
        const result = await axios(capitalURL);
        let iconurl = "http://openweathermap.org/img/w/" + result.data.weather[0].icon + ".png";
        setIcon(iconurl)
        setTemp((result.data.main.temp-273.15).toFixed(2));
        setWindspeed(result.data.wind.speed)
        setWindDegree(result.data.wind.deg)
        
      }, []);    
    
    return(
        <div>
            <h2>Weather in {country.name}</h2>
            <div>temperature:{temp} C</div>
            <div><img src={icon} /></div>
            <div>wind:{windspeed} kph direction {windDirection()}</div>
        </div>   
    )
}

export default Weather