import Languages from "./Languages"

const Countries = ({ countries }) => {

    if (countries.length > 10) return <p>Too many matches, specify another filter</p>
    else if (countries.length > 1) {
        return (
            <ul>
                {countries.map(
                    country =>
                        <li key={country.name.common}>{country.name.common}</li>
                )}
            </ul>
        )
    }
    else if (countries.length === 1) {
        const country = countries[0]
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
    else {
        return (
            <p>{'No countries matching with filter'}</p>
        )
    }
}

export default Countries