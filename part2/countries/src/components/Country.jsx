import Languages from "./Languages"
import Weather from "./Weather"

const Country = ({ country }) => {
    const [lat, lon] = country.latlng
    
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital || 'N/A'}</p>
            <p>Area: {country.area || 'N/A'}</p>

            <h3>Languages</h3>
            <Languages languages={country.languages} />

            <img src={`${country.flags.svg}`} alt={`${country.flags.alt}`} width={'300px'} />

            <Weather capital={country.capital} lat={lat} lon={lon} />
        </div>
    )
}

export default Country