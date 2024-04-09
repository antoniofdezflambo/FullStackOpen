import { useEffect, useState } from "react"
import weatherServices from '../services/weather'

const ICONS_URL = 'https://openweathermap.org/img/wn/'

const Weather = ({ capital, lat, lon }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        weatherServices.getWeather(lat, lon).then(data => {
            setData(data)
        })
    }, [lat, lon])

    if (data) {
        console.log(data)
        return (
            <>
                <h4>Weather in {capital}</h4>
                <p>Temperature: {parseFloat((data.main.temp - 273.15).toFixed(1))}C</p>
                <img src={`${ICONS_URL}${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                <p>Wind: {data.wind.speed}m/s</p>
            </>
        )
    }
}

export default Weather