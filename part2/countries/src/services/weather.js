import axios from "axios"
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?"

const getWeather = (lat, lon) => {
    const request = axios.get(`${WEATHER_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
    return request.then(response => response.data)
}

export default { getWeather }