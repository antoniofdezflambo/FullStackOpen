import Languages from "./Languages"

const Country = ({ country }) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital || 'N/A'}</p>
            <p>Area: {country.area || 'N/A'}</p>

            <h3>Languages</h3>
            <Languages languages={country.languages} />

            <img src={`${country.flags.svg}`} alt={`${country.flags.alt}`} width={'300px'} />
        </div>
    )
}

export default Country