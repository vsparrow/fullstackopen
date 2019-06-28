import React from 'react'

const Weather = (props) => {
    const country = props.country
    return(
        <div>
            <h2>Weather in {country.name}</h2>
            <div>temperature:</div>
            <div>image</div>
            <div>wind:</div>
        </div>   
    )
}

export default Weather