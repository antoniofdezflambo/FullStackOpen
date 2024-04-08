import axios from 'axios'
const COUNTRIES_API = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    const request = axios.get(`${COUNTRIES_API}/all`)
    return request.then(response => response.data)
}

export default { getAll }